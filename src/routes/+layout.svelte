<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen flex-col bg-base-100 font-sans text-base-content">
	<Nav />
	<main class="flex-1">
		{#key page.url.pathname}
			<div in:fade={{ duration: 300, delay: 150 }} out:fade={{ duration: 150 }}>
				{@render children()}
			</div>
		{/key}
	</main>
	<Footer />
</div>
