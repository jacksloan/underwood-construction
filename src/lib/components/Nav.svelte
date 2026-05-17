<script lang="ts">
	import { page } from '$app/state';
	import { onMount, tick } from 'svelte';
	import Icon from './Icon.svelte';

	let mobileOpen = $state(false);
	let activeHash = $state('');
	let debounceTimer: ReturnType<typeof setTimeout> | null = null;
	const DEBOUNCE_MS = 150;

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/#services', label: 'Services' },
		{ href: '/#about', label: 'About' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/#contact', label: 'Contact' }
	];

	const sectionIds = ['services', 'about', 'contact'];

	// Sliding underline state
	let navEl: HTMLElement | undefined = $state();
	let linkEls: HTMLAnchorElement[] = $state([]);
	let underlineLeft = $state(0);
	let underlineWidth = $state(0);
	let underlineVisible = $state(false);
	let hasInitialized = false;

	function setActiveHash(hash: string) {
		if (debounceTimer) clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			activeHash = hash;
		}, DEBOUNCE_MS);
	}

	function getActiveIndex(): number {
		const pathname = page.url.pathname;
		if (pathname !== '/') {
			return links.findIndex((l) => {
				const linkPath = l.href.split('#')[0];
				return linkPath !== '/' && pathname.startsWith(linkPath);
			});
		}
		if (activeHash) {
			return links.findIndex((l) => l.href.includes('#') && l.href.split('#')[1] === activeHash);
		}
		return 0; // Home
	}

	function updateUnderline() {
		const idx = getActiveIndex();
		const el = linkEls[idx];
		if (!el || !navEl) {
			underlineVisible = false;
			return;
		}
		const navRect = navEl.getBoundingClientRect();
		const elRect = el.getBoundingClientRect();
		underlineLeft = elRect.left - navRect.left;
		underlineWidth = elRect.width;
		underlineVisible = true;
	}

	$effect(() => {
		// Re-run whenever activeHash or pathname changes
		void activeHash;
		void page.url.pathname;
		if (!hasInitialized) return;
		tick().then(updateUnderline);
	});

	function closeMobile() {
		mobileOpen = false;
	}

	onMount(() => {
		const visibleSections = new Set<string>();

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						visibleSections.add(entry.target.id);
					} else {
						visibleSections.delete(entry.target.id);
					}
				}
				const active = sectionIds.find((id) => visibleSections.has(id)) ?? '';
				setActiveHash(active);
			},
			{ rootMargin: '-30% 0px -30% 0px', threshold: 0 }
		);

		function observeSections() {
			for (const id of sectionIds) {
				const el = document.getElementById(id);
				if (el) observer.observe(el);
			}
		}

		observeSections();

		// Initial position without transition
		requestAnimationFrame(() => {
			updateUnderline();
			hasInitialized = true;
		});

		const onResize = () => updateUnderline();
		window.addEventListener('resize', onResize);

		const unsubscribe = $effect.root(() => {
			$effect(() => {
				const _pathname = page.url.pathname;
				if (_pathname === '/') {
					requestAnimationFrame(() => observeSections());
				} else {
					if (debounceTimer) clearTimeout(debounceTimer);
					activeHash = '';
					visibleSections.clear();
				}
			});
		});

		return () => {
			if (debounceTimer) clearTimeout(debounceTimer);
			observer.disconnect();
			unsubscribe();
			window.removeEventListener('resize', onResize);
		};
	});
</script>

<!-- Desktop Header -->
<header class="navbar sticky top-0 z-50 border-b border-outline-variant bg-base-100 px-margin-mobile md:px-gutter">
	<div class="mx-auto flex h-20 w-full max-w-container-max items-center justify-between">
		<a href="/" class="flex items-center gap-4">
			<span class="font-serif text-[28px] font-bold leading-9 text-forest-evergreen">Under Wood Construction</span>
		</a>

		<!-- Desktop Nav -->
		<nav bind:this={navEl} class="relative hidden items-center gap-8 md:flex">
			{#each links as link, i}
				{@const active = getActiveIndex() === i}
				<a
					bind:this={linkEls[i]}
					href={link.href}
					class="pb-1 text-[15px] font-medium leading-6 tracking-[0.05em] font-sans transition-colors duration-200
						{active ? 'text-accent' : 'text-forest-evergreen hover:text-harvest-oak'}"
				>
					{link.label}
				</a>
			{/each}
			<!-- Sliding underline -->
			<span
				class="pointer-events-none absolute bottom-0 h-[2px] bg-secondary"
				class:opacity-0={!underlineVisible}
				class:opacity-100={underlineVisible}
				style="left: {underlineLeft}px; width: {underlineWidth}px; transition: left 300ms cubic-bezier(0.4, 0, 0.2, 1), width 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms;"
			></span>
		</nav>

		<a
			href="tel:320-248-4774"
			class="btn btn-primary hidden rounded-none text-[14px] font-semibold uppercase tracking-[0.1em] lg:inline-flex"
		>
			Call Now
		</a>

		<!-- Mobile Menu Toggle -->
		<button class="btn btn-ghost md:hidden" onclick={() => (mobileOpen = true)}>
			<Icon name="menu" class="text-forest-evergreen" />
		</button>
	</div>
</header>

<!-- Mobile Nav Overlay -->
{#if mobileOpen}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-base-100 md:hidden"
		onkeydown={(e) => e.key === 'Escape' && closeMobile()}
	>
		<button class="btn btn-ghost absolute right-6 top-6" onclick={closeMobile}>
			<Icon name="close" class="text-4xl text-forest-evergreen" />
		</button>
		{#each links as link}
			<a
				href={link.href}
				class="font-serif text-[28px] font-semibold leading-9 text-forest-evergreen"
				onclick={closeMobile}
			>
				{link.label}
			</a>
		{/each}
	</div>
{/if}
