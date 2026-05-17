<script lang="ts">
	import { onNavigate, afterNavigate } from '$app/navigation';
	import './layout.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		if (navigation.from?.url.pathname === navigation.to?.url.pathname) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	afterNavigate((nav) => {
		if (nav.from?.url.pathname === nav.to?.url.pathname) return;
		const hash = nav.to?.url.hash;
		if (!hash) return;
		requestAnimationFrame(() => {
			const el = document.querySelector(hash);
			el?.scrollIntoView({ behavior: 'smooth' });
		});
	});
</script>

<svelte:head>
	<link rel="icon" href="/images/logo.jpg" />
	<link rel="canonical" href="https://underwoodconstruction.com" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "GeneralContractor",
		"name": "Under Wood Construction",
		"url": "https://underwoodconstruction.com",
		"logo": "https://underwoodconstruction.com/images/logo.jpg",
		"image": "https://underwoodconstruction.com/images/logo.jpg",
		"description": "Licensed and insured general contracting company devoted to craftsmanship and customer service. Specializing in new construction, remodeling, and timber frame structures.",
		"founder": {
			"@type": "Person",
			"name": "Carter Gjevre"
		},
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Ely",
			"addressRegion": "MN",
			"addressCountry": "US"
		},
		"areaServed": [
			{ "@type": "City", "name": "Ely", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Grand Marais", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Hovland", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Lutsen", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Tofte", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Silver Bay", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Two Harbors", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Fergus Falls", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Underwood", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Battle Lake", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Perham", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Pelican Rapids", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Detroit Lakes", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Alexandria", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Duluth", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Virginia", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Hibbing", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Schroeder", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "City", "name": "Beaver Bay", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "AdministrativeArea", "name": "Cook County", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "AdministrativeArea", "name": "Otter Tail County", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "AdministrativeArea", "name": "Lake County", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "AdministrativeArea", "name": "St. Louis County", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "AdministrativeArea", "name": "Arrowhead Region", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
			{ "@type": "AdministrativeArea", "name": "North Shore", "containedInPlace": { "@type": "State", "name": "Minnesota" } }
		],
		"knowsAbout": ["Timber Framing", "New Home Construction", "Remodeling", "Custom Joinery", "General Contracting"],
		"hasCredential": {
			"@type": "EducationalOccupationalCredential",
			"credentialCategory": "Contractor License",
			"recognizedBy": { "@type": "Organization", "name": "State of Minnesota" },
			"identifier": "BC-807199"
		},
		"sameAs": []
	})}</script>`}
</svelte:head>

<div class="flex min-h-screen flex-col bg-base-100 font-sans text-base-content">
	<Nav />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
