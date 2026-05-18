<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
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
		{ href: '/team', label: 'Team' },
		{ href: '/#contact', label: 'Contact' }
	];

	const sectionIds = ['services', 'about', 'contact'];

	function setActiveHash(hash: string) {
		if (debounceTimer) clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			activeHash = hash;
		}, DEBOUNCE_MS);
	}

	function isActive(linkHref: string): boolean {
		const pathname = page.url.pathname;
		if (pathname !== '/') {
			const linkPath = linkHref.split('#')[0];
			return linkPath !== '/' && pathname.startsWith(linkPath);
		}
		// Use activeHash from observer, but fall back to the URL hash immediately
		// so we don't flash "Home" before the observer/effect catches up
		const currentHash = activeHash || page.url.hash?.replace('#', '') || '';
		if (currentHash) {
			if (linkHref.includes('#')) return linkHref.split('#')[1] === currentHash;
			return false;
		}
		return linkHref === '/';
	}

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

		const unsubscribe = $effect.root(() => {
			$effect(() => {
				const _pathname = page.url.pathname;
				const _hash = page.url.hash;
				if (_pathname === '/') {
					// If arriving with a hash (e.g. from /projects to /#about),
					// set it immediately so the underline jumps straight there
					const target = _hash?.replace('#', '') || '';
					if (target && sectionIds.includes(target)) {
						if (debounceTimer) clearTimeout(debounceTimer);
						activeHash = target;
					}
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
		};
	});
</script>

<!-- Desktop Header -->
<header class="navbar sticky top-0 z-50 border-b border-outline-variant bg-base-100 px-margin-mobile md:px-gutter">
	<div class="mx-auto flex h-20 w-full max-w-container-max items-center justify-between">
		<a href="/" class="flex items-center gap-3">
			<img src="/images/logo.jpg" alt="Under Wood Construction logo" class="h-10 w-auto" />
			<span class="font-serif text-[28px] font-bold leading-9 text-forest-evergreen">Under Wood Construction</span>
		</a>

		<!-- Desktop Nav -->
		<nav class="relative hidden items-center gap-8 md:flex">
			{#each links as link}
				{@const active = isActive(link.href)}
				<a
					href={link.href}
					class="pb-1 text-[15px] font-medium leading-6 tracking-[0.05em] font-sans transition-colors duration-200
						{active ? 'border-b-2 border-secondary text-accent' : 'text-forest-evergreen hover:text-harvest-oak'}"
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

