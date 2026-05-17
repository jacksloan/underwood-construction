<script lang="ts">
	import { page } from '$app/state';
	import Icon from './Icon.svelte';

	let mobileOpen = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/#services', label: 'Services' },
		{ href: '/#about', label: 'About' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/#contact', label: 'Contact' }
	];

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<!-- Desktop Header -->
<header class="navbar sticky top-0 z-50 border-b border-outline-variant bg-base-100 px-margin-mobile md:px-gutter">
	<div class="mx-auto flex h-20 w-full max-w-container-max items-center justify-between">
		<a href="/" class="flex items-center gap-4">
			<span class="font-serif text-[28px] font-bold leading-9 text-forest-evergreen">Under Wood Construction</span>
		</a>

		<!-- Desktop Nav -->
		<nav class="hidden gap-8 md:flex">
			{#each links as link}
				{@const isActive = page.url.pathname === link.href || (link.href !== '/' && page.url.pathname.startsWith(link.href.split('#')[0]) && link.href.split('#')[0] !== '/')}
				<a
					href={link.href}
					class="text-[15px] font-medium leading-6 tracking-[0.05em] font-sans transition-colors duration-200
						{isActive ? 'border-b-2 border-secondary text-accent pb-1' : 'text-forest-evergreen hover:text-harvest-oak'}"
				>
					{link.label}
				</a>
			{/each}
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
