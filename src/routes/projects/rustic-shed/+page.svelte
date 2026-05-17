<script lang="ts">
	import { page } from '$app/state';
	import Icon from '$lib/components/Icon.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	const slug = $derived(page.url.pathname.replace(/\//g, '-').replace(/^-/, ''));
	const heroTransition = $derived(`view-transition-name: ${slug}`);
</script>

<svelte:head>
	<title>Rustic Shed | Under Wood Construction</title>
	<meta name="description" content="A compact, functional outbuilding built with reclaimed materials and traditional craftsmanship by Under Wood Construction in Minnesota." />
	<meta property="og:title" content="Rustic Shed | Under Wood Construction" />
	<meta property="og:description" content="A compact outbuilding built with reclaimed materials and traditional craftsmanship." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://underwoodconstruction.com/images/project-2-rustic-shed.jpg" />
</svelte:head>

<!-- Hero Section -->
<section class="relative flex h-[70vh] w-full items-end md:h-[85vh]">
	<img
		alt="Rustic Shed"
		class="absolute inset-0 h-full w-full object-cover contrast-[1.1] grayscale-[20%]"
		style={heroTransition}
		src="/images/project-2-rustic-shed.jpg"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-forest-evergreen/80 to-transparent"></div>
	<div class="relative mx-auto w-full max-w-container-max px-margin-mobile pb-16 md:px-gutter md:pb-24">
		<div class="max-w-3xl">
			<span class="mb-6 inline-block bg-harvest-oak px-3 py-1 text-[14px] font-semibold uppercase tracking-[0.1em] text-sapwood-cream">SMALL & SUSTAINABLE</span>
			<h1 class="mb-4 font-serif text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-sapwood-cream">Rustic Shed</h1>
			<div class="h-1 w-24 bg-harvest-oak"></div>
		</div>
	</div>
</section>

<!-- Project Meta Data Bar -->
<section class="w-full border-b border-outline-variant bg-base-200">
	<div class="mx-auto max-w-container-max px-margin-mobile py-8 md:px-gutter">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div class="flex items-center gap-4">
				<Icon name="location_on" class="text-2xl text-harvest-oak" />
				<div>
					<p class="text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-on-surface-variant">Location</p>
					<p class="font-serif text-[20px] font-semibold text-forest-evergreen">Minnesota</p>
				</div>
			</div>
			<div class="flex items-center gap-4 md:border-x md:border-outline-variant md:px-8">
				<Icon name="architecture" class="text-2xl text-harvest-oak" />
				<div>
					<p class="text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-on-surface-variant">Type</p>
					<p class="font-serif text-[20px] font-semibold text-forest-evergreen">Outbuilding</p>
				</div>
			</div>
			<div class="flex items-center gap-4">
				<Icon name="event_available" class="text-2xl text-harvest-oak" />
				<div>
					<p class="text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-on-surface-variant">Category</p>
					<p class="font-serif text-[20px] font-semibold text-forest-evergreen">Small & Sustainable</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Project Description Section -->
<section class="py-section-gap-md md:py-section-gap-lg">
	<div class="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
		<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
			<div class="lg:col-span-5">
				<h2 class="mb-8 font-serif text-[40px] font-semibold leading-[48px] text-forest-evergreen">Small Footprint, Big Character</h2>
				<div class="space-y-6">
					<p class="text-[18px] leading-7 text-on-surface-variant">
						This rustic shed proves that even the simplest structures deserve thoughtful design and quality construction. Built with reclaimed materials where possible, it blends seamlessly into its rural Minnesota setting while providing practical, weather-tight storage and workspace.
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">RECLAIMED MATERIALS</span>
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">COMPACT DESIGN</span>
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">FUNCTIONAL</span>
					</div>
				</div>
			</div>
			<div class="lg:col-span-7">
				<div class="border border-outline-variant bg-base-100 p-2 shadow-sm">
					<img
						alt="Rustic Shed Detail"
						class="aspect-[4/3] w-full object-cover"
						src="/images/project-2-rustic-shed.jpg"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<CtaBanner
	heading="Need a Custom Outbuilding?"
	description="From garden sheds to workshops, we build small structures with the same attention to detail as our largest projects."
>
	<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
		<a href="/#contact" class="btn btn-secondary rounded-none px-10 py-4 text-[14px] font-semibold uppercase tracking-[0.1em] text-sapwood-cream hover:bg-sapwood-cream hover:text-forest-evergreen">
			START YOUR PROJECT
		</a>
		<a href="/projects" class="btn btn-outline rounded-none border-sapwood-cream/30 px-10 py-4 text-[14px] font-semibold uppercase tracking-[0.1em] text-sapwood-cream hover:bg-sapwood-cream/10">
			BACK TO PROJECTS
		</a>
	</div>
</CtaBanner>
