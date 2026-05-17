<script lang="ts">
	import Icon from './Icon.svelte';

	import type { Snippet } from 'svelte';

	let {
		icon,
		title,
		description,
		ctaLabel = '',
		ctaHref = '#contact',
		variant = 'light',
		children,
		image
	}: {
		icon: string;
		title: string;
		description: string;
		ctaLabel?: string;
		ctaHref?: string;
		variant?: 'light' | 'dark' | 'wide';
		children?: Snippet;
		image?: Snippet;
	} = $props();
</script>

{#if variant === 'light'}
	<div class="card group relative overflow-hidden rounded-none border border-outline-variant bg-sapwood-cream p-8 transition-all duration-500 hover:border-harvest-oak md:p-12">
		<div class="relative z-10">
			<Icon name={icon} class="mb-6 text-4xl text-harvest-oak" />
			<h3 class="mb-4 font-serif text-[28px] font-semibold leading-9 text-forest-evergreen">{title}</h3>
			<p class="mb-8 max-w-lg text-[16px] leading-relaxed text-on-surface-variant">
				{description}
			</p>
			{#if ctaLabel}
				<a href={ctaHref} class="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen transition-colors group-hover:text-harvest-oak">
					{ctaLabel} <Icon name="arrow_forward" class="text-sm" />
				</a>
			{/if}
		</div>
		{@render children?.()}
		<div class="absolute bottom-[-10%] right-[-5%] opacity-10 transition-opacity duration-500 group-hover:opacity-20">
			<Icon name="architecture" class="text-[200px]" />
		</div>
	</div>
{:else if variant === 'dark'}
	<div class="card flex flex-col justify-between rounded-none bg-forest-evergreen p-8 text-sapwood-cream md:p-12">
		<div>
			<Icon name={icon} class="mb-6 text-4xl text-harvest-oak" />
			<h3 class="mb-4 font-serif text-[28px] font-semibold leading-9">{title}</h3>
			<p class="mb-8 text-[16px] leading-6 text-sapwood-cream/80">
				{description}
			</p>
		</div>
		{@render children?.()}
	</div>
{:else if variant === 'wide'}
	<div class="card group overflow-hidden rounded-none bg-surface-container">
		<div class="grid grid-cols-1 md:grid-cols-2">
			<div class="flex flex-col justify-center p-8 md:p-16">
				<Icon name={icon} class="mb-6 text-4xl text-harvest-oak" />
				<h3 class="mb-6 font-serif text-[28px] font-semibold leading-9 text-forest-evergreen">{title}</h3>
				<p class="mb-8 text-[18px] leading-7 text-on-surface-variant">
					{description}
				</p>
				{@render children?.()}
			</div>
			<div class="relative h-[400px] overflow-hidden md:h-auto">
				{@render image?.()}
				<div class="absolute inset-0 bg-forest-evergreen/10 transition-colors duration-500 group-hover:bg-transparent"></div>
			</div>
		</div>
	</div>
{/if}
