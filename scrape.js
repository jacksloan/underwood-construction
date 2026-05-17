import { chromium } from 'playwright';
import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://www.under-woodconstruction.com';
const STATIC_DIR = join(__dirname, 'static');
const IMAGES_DIR = join(STATIC_DIR, 'images');
const PREVIOUS_DIR = join(__dirname, 'previous');

const PAGES = [
	{ url: '/', name: 'home' },
	{ url: '/project-1', name: 'project-1' },
	{ url: '/project-2', name: 'project-2' }
];

// Track downloaded images to avoid duplicates
const downloadedImages = new Set();

function ensureDirs() {
	for (const dir of [IMAGES_DIR, PREVIOUS_DIR]) {
		if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
	}
}

async function downloadImage(url, page) {
	try {
		const parsedUrl = new URL(url);
		// Build a clean filename from the URL path
		let filename = basename(parsedUrl.pathname);
		// Handle Wix image URLs — extract meaningful name from path
		const wixMatch = url.match(/\/([^/]+\.(jpg|jpeg|png|gif|webp|svg|avif|bmp|tiff))/i);
		if (wixMatch) {
			filename = wixMatch[1];
		}
		// Remove query params from filename
		filename = filename.split('?')[0];
		if (!filename || filename === '/' || !extname(filename)) {
			filename = `image-${downloadedImages.size + 1}.jpg`;
		}
		// Skip duplicates
		if (downloadedImages.has(filename)) return filename;

		const response = await page.request.get(url);
		if (response.ok()) {
			const buffer = await response.body();
			writeFileSync(join(IMAGES_DIR, filename), buffer);
			downloadedImages.add(filename);
			console.log(`  ✓ Downloaded: ${filename}`);
		} else {
			console.log(`  ✗ Failed (${response.status()}): ${url}`);
		}
		return filename;
	} catch (err) {
		console.log(`  ✗ Error downloading ${url}: ${err.message}`);
		return null;
	}
}

async function scrapeImages(page) {
	// Collect image URLs from <img> tags
	const imgSrcs = await page.evaluate(() => {
		const imgs = Array.from(document.querySelectorAll('img'));
		return imgs
			.map((img) => img.src || img.dataset?.src)
			.filter((src) => src && !src.startsWith('data:'));
	});

	// Collect background images from inline styles
	const bgImages = await page.evaluate(() => {
		const allElements = Array.from(document.querySelectorAll('*'));
		const urls = [];
		for (const el of allElements) {
			const bg = getComputedStyle(el).backgroundImage;
			if (bg && bg !== 'none') {
				const matches = bg.match(/url\(["']?([^"')]+)["']?\)/g);
				if (matches) {
					for (const m of matches) {
						const url = m.replace(/url\(["']?/, '').replace(/["']?\)/, '');
						if (!url.startsWith('data:')) urls.push(url);
					}
				}
			}
		}
		return urls;
	});

	// Collect from <source> tags (picture elements), <video poster>, etc.
	const sourceSrcs = await page.evaluate(() => {
		const sources = Array.from(document.querySelectorAll('source[srcset], video[poster]'));
		return sources
			.map((el) => el.srcset || el.poster)
			.filter((src) => src && !src.startsWith('data:'));
	});

	const allUrls = [...new Set([...imgSrcs, ...bgImages, ...sourceSrcs])];
	console.log(`  Found ${allUrls.length} image(s)`);

	for (const url of allUrls) {
		await downloadImage(url, page);
	}
}

async function scrapeContent(page, pageName) {
	const sections = await page.evaluate(() => {
		// Grab all heading and paragraph elements in document order
		const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p'));
		const result = [];
		let currentSection = null;

		for (const el of elements) {
			const tag = el.tagName.toLowerCase();
			const text = el.textContent?.trim();
			if (!text) continue;

			if (tag.startsWith('h')) {
				// Start a new section on each heading
				if (currentSection) result.push(currentSection);
				const level = parseInt(tag[1]);
				currentSection = { heading: text, level, paragraphs: [] };
			} else if (tag === 'p') {
				if (currentSection) {
					currentSection.paragraphs.push(text);
				} else {
					// Paragraph before any heading — create an untitled section
					currentSection = { heading: null, level: 0, paragraphs: [text] };
				}
			}
		}
		if (currentSection) result.push(currentSection);
		return result;
	});

	// Build markdown
	let md = `# ${pageName}\n\n`;
	md += `> Scraped from ${BASE_URL}${pageName === 'home' ? '/' : '/' + pageName}\n\n---\n\n`;

	for (const section of sections) {
		if (section.heading) {
			const prefix = '#'.repeat(Math.min(section.level, 6));
			md += `${prefix} ${section.heading}\n\n`;
		}
		for (const p of section.paragraphs) {
			md += `${p}\n\n`;
		}
	}

	const filename = `${pageName}.md`;
	writeFileSync(join(PREVIOUS_DIR, filename), md.trim() + '\n');
	console.log(`  ✓ Wrote: previous/${filename} (${sections.length} sections)`);
}

async function main() {
	ensureDirs();
	console.log('Launching browser...');
	const browser = await chromium.launch({ headless: true });
	const context = await browser.newContext({
		userAgent:
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
	});
	const page = await context.newPage();

	for (const { url, name } of PAGES) {
		const fullUrl = `${BASE_URL}${url}`;
		console.log(`\nScraping: ${fullUrl}`);
		await page.goto(fullUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
		// Extra wait for Wix lazy-loaded content
		await page.waitForTimeout(2000);
		// Scroll to bottom to trigger lazy loading
		await page.evaluate(async () => {
			await new Promise((resolve) => {
				let totalHeight = 0;
				const distance = 300;
				const timer = setInterval(() => {
					window.scrollBy(0, distance);
					totalHeight += distance;
					if (totalHeight >= document.body.scrollHeight) {
						clearInterval(timer);
						resolve();
					}
				}, 100);
			});
		});
		await page.waitForTimeout(1000);

		console.log('  Downloading images...');
		await scrapeImages(page);

		console.log('  Extracting content...');
		await scrapeContent(page, name);
	}

	await browser.close();
	console.log('\nDone! Images saved to static/images/, content saved to previous/');
}

main().catch((err) => {
	console.error('Fatal error:', err);
	process.exit(1);
});
