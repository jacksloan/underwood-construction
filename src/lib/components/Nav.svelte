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
		{ href: '/#contact', label: 'Contact' }
	];

	const sectionIds = ['services', 'about', 'contact'];

	function setActiveHash(hash: string) {
		if (debounceTimer) clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			if (hash === activeHash) return;
			if (document.startViewTransition) {
				document.documentElement.classList.add('nav-transition');
				const t = document.startViewTransition(() => {
					activeHash = hash;
				});
				t.finished.then(() => {
					document.documentElement.classList.remove('nav-transition');
				});
			} else {
				activeHash = hash;
			}
		}, DEBOUNCE_MS);
	}

	function isActive(linkHref: string): boolean {
		const pathname = page.url.pathname;
		if (pathname !== '/') {
			const linkPath = linkHref.split('#')[0];
			return linkPath !== '/' && pathname.startsWith(linkPath);
		}
		if (activeHash) {
			if (linkHref.includes('#')) return linkHref.split('#')[1] === activeHash;
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
		<nav class="relative hidden items-center gap-8 md:flex">
			{#each links as link}
				{@const active = isActive(link.href)}
				<a
					href={link.href}
					class="nav-link relative pb-1 text-[15px] font-medium leading-6 tracking-[0.05em] font-sans transition-colors duration-200
						{active ? 'text-accent is-active' : 'text-forest-evergreen hover:text-harvest-oak'}"
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

<style>
	:global(.nav-link) {
		position: relative;
	}

	:global(.nav-link)::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background-color: var(--color-secondary);
		scale: 0 1;
	}

	:global(.nav-link.is-active)::after {
		scale: 1 1;
		view-transition-name: nav-underline;
	}

	::view-transition-old(nav-underline),
	::view-transition-new(nav-underline) {
		animation-duration: 300ms;
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		height: 100%;
	}
</style>
