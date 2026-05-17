<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	afterNavigate((nav) => {
		// Only handle cross-page navigations with a hash
		if (nav.from?.url.pathname === nav.to?.url.pathname) return;
		const hash = nav.to?.url.hash;
		if (!hash) return;
		setTimeout(() => {
			const el = document.querySelector(hash);
			el?.scrollIntoView({ behavior: 'smooth' });
		}, 50);
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen flex-col bg-base-100 font-sans text-base-content">
	<Nav />
	<main class="flex-1">
		{#key page.url.pathname}
			<div in:fade={{ duration: 200 }}>
				{@render children()}
			</div>
		{/key}
	</main>
	<Footer />
</div>
