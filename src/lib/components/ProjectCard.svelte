<script lang="ts">
	import Icon from './Icon.svelte';

	let {
		category,
		title,
		description,
		image,
		href = '#',
		icon = '',
		variant = 'default',
		bg = 'bg-sapwood-cream',
		transitionName = ''
	}: {
		category: string;
		title: string;
		description: string;
		image: string;
		href?: string;
		icon?: string;
		variant?: 'default' | 'portrait' | 'horizontal';
		bg?: string;
		transitionName?: string;
	} = $props();

	const imgStyle = $derived(transitionName ? `view-transition-name: ${transitionName}` : undefined);
</script>

{#if variant === 'default'}
	<!-- Standard vertical card (image on top, content below) -->
	<div class="card group relative overflow-hidden border border-outline-variant {bg} transition-all hover:shadow-lg">
		<figure class="aspect-video overflow-hidden">
			<img alt={title} class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={image} style={imgStyle} />
		</figure>
		<div class="card-body p-8">
			<div class="mb-4 flex items-start justify-between">
				<div>
					<span class="mb-2 block text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-harvest-oak">{category}</span>
					<h3 class="font-serif text-[40px] font-semibold leading-[48px] text-forest-evergreen">{title}</h3>
				</div>
				{#if icon}
					<Icon name={icon} class="text-forest-evergreen" />
				{/if}
			</div>
			<p class="mb-6 max-w-xl text-[16px] leading-6 text-on-surface-variant">{description}</p>
			<a href={href} class="link inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen no-underline transition-colors hover:text-harvest-oak">
				VIEW PROJECT <Icon name="arrow_right_alt" class="text-sm" />
			</a>
		</div>
	</div>
{:else if variant === 'portrait'}
	<!-- Portrait card (square image, smaller text) -->
	<div class="card group flex flex-col overflow-hidden border border-outline-variant {bg} transition-all hover:shadow-lg">
		<figure class="aspect-square overflow-hidden">
			<img alt={title} class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={image} style={imgStyle} />
		</figure>
		<div class="card-body flex-grow p-6">
			<span class="mb-2 block text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-harvest-oak">{category}</span>
			<h3 class="mb-4 font-serif text-[28px] font-semibold leading-9 text-forest-evergreen">{title}</h3>
			<p class="mb-6 text-[16px] leading-6 text-on-surface-variant">{description}</p>
			<a href={href} class="link inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen no-underline transition-colors hover:text-harvest-oak">
				VIEW PROJECT <Icon name="arrow_right_alt" class="text-sm" />
			</a>
		</div>
	</div>
{:else if variant === 'horizontal'}
	<!-- Horizontal card (image left, content right) -->
	<div class="card group relative overflow-hidden border border-outline-variant {bg} transition-all hover:shadow-lg">
		<div class="flex h-full flex-col md:flex-row">
			<figure class="aspect-square w-full overflow-hidden md:aspect-auto md:w-1/2">
				<img alt={title} class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={image} style={imgStyle} />
			</figure>
			<div class="card-body flex w-full flex-col justify-center p-8 md:w-1/2">
				<span class="mb-2 block text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-harvest-oak">{category}</span>
				<h3 class="mb-4 font-serif text-[28px] font-semibold leading-9 text-forest-evergreen">{title}</h3>
				<p class="mb-8 text-[16px] leading-6 text-on-surface-variant">{description}</p>
				<a href={href} class="link mt-auto inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen no-underline transition-colors hover:text-harvest-oak">
					VIEW PROJECT <Icon name="arrow_right_alt" class="text-sm" />
				</a>
			</div>
		</div>
	</div>
{/if}
