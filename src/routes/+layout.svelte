<script lang="ts">
	import { onNavigate, afterNavigate } from '$app/navigation';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
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

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen flex-col bg-base-100 font-sans text-base-content">
	<Nav />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
