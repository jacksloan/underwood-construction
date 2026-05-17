<script lang="ts">
	import { page } from '$app/state';
	import Icon from '$lib/components/Icon.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	const slug = $derived(page.url.pathname.replace(/\//g, '-').replace(/^-/, ''));
	const heroTransition = $derived(`view-transition-name: ${slug}`);
</script>

<svelte:head>
	<title>Grand Marais Sauna | Under Wood Construction</title>
	<meta name="description" content="A custom-built sauna on Minnesota's North Shore, designed for durability and relaxation in the Arrowhead Region's harsh climate. Built by Under Wood Construction." />
	<meta property="og:title" content="Grand Marais Sauna | Under Wood Construction" />
	<meta property="og:description" content="A custom-built sauna on Minnesota's North Shore, designed for durability and relaxation." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://underwoodconstruction.com/images/project-3-sauna-exterior.jpg" />
</svelte:head>

<!-- Hero Section -->
<section class="relative flex h-[70vh] w-full items-end md:h-[85vh]">
	<img
		alt="Grand Marais Sauna Exterior"
		class="absolute inset-0 h-full w-full object-cover contrast-[1.1] grayscale-[20%]"
		style={heroTransition}
		src="/images/project-3-sauna-exterior.jpg"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-forest-evergreen/80 to-transparent"></div>
	<div class="relative mx-auto w-full max-w-container-max px-margin-mobile pb-16 md:px-gutter md:pb-24">
		<div class="max-w-3xl">
			<span class="mb-6 inline-block bg-harvest-oak px-3 py-1 text-[14px] font-semibold uppercase tracking-[0.1em] text-sapwood-cream">SMALL & SUSTAINABLE</span>
			<h1 class="mb-4 font-serif text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-sapwood-cream">Grand Marais Sauna</h1>
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
					<p class="font-serif text-[20px] font-semibold text-forest-evergreen">Grand Marais, MN</p>
				</div>
			</div>
			<div class="flex items-center gap-4 md:border-x md:border-outline-variant md:px-8">
				<Icon name="architecture" class="text-2xl text-harvest-oak" />
				<div>
					<p class="text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-on-surface-variant">Type</p>
					<p class="font-serif text-[20px] font-semibold text-forest-evergreen">Custom Sauna</p>
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
				<h2 class="mb-8 font-serif text-[40px] font-semibold leading-[48px] text-forest-evergreen">North Shore Warmth</h2>
				<div class="space-y-6">
					<p class="text-[18px] leading-7 text-on-surface-variant">
						Built on Minnesota's North Shore near Grand Marais, this custom sauna was designed to withstand the region's extreme winters while providing a year-round retreat. The construction prioritizes thermal efficiency, moisture management, and natural materials that complement the surrounding boreal landscape.
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">THERMAL EFFICIENCY</span>
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">NORTH SHORE</span>
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">NATURAL MATERIALS</span>
					</div>
				</div>
			</div>
			<div class="lg:col-span-7">
				<div class="border border-outline-variant bg-base-100 p-2 shadow-sm">
					<img
						alt="Grand Marais Sauna Alternate View"
						class="aspect-[4/3] w-full object-cover"
						src="/images/project-3-sauna-exterior-2.jpg"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Image Gallery -->
<section class="bg-surface-container py-section-gap-md md:py-section-gap-lg">
	<div class="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
		<div class="mb-12 flex items-end justify-between">
			<div>
				<p class="mb-2 text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-harvest-oak">PROJECT DOSSIER</p>
				<h2 class="font-serif text-[40px] font-semibold leading-[48px] text-forest-evergreen">The Build in Detail</h2>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div class="group cursor-pointer">
				<div class="mb-4 overflow-hidden border border-outline-variant/30">
					<img
						alt="Sauna Exterior View"
						class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="/images/project-3-sauna-exterior.jpg"
					/>
				</div>
				<h3 class="mb-1 font-serif text-[20px] font-semibold text-forest-evergreen">Exterior Design</h3>
				<p class="text-[16px] leading-6 text-on-surface-variant/70">Built to endure Minnesota's harshest conditions.</p>
			</div>
			<div class="group cursor-pointer lg:translate-y-12">
				<div class="mb-4 overflow-hidden border border-outline-variant/30">
					<img
						alt="Sauna Exterior Alternate Angle"
						class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="/images/project-3-sauna-exterior-2.jpg"
					/>
				</div>
				<h3 class="mb-1 font-serif text-[20px] font-semibold text-forest-evergreen">Weather-Tight Construction</h3>
				<p class="text-[16px] leading-6 text-on-surface-variant/70">Meticulous detailing for long-term durability.</p>
			</div>
			<div class="group cursor-pointer">
				<div class="mb-4 overflow-hidden border border-outline-variant/30">
					<img
						alt="Sauna Interior"
						class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="/images/project-3-sauna-interior.jpg"
					/>
				</div>
				<h3 class="mb-1 font-serif text-[20px] font-semibold text-forest-evergreen">Interior Warmth</h3>
				<p class="text-[16px] leading-6 text-on-surface-variant/70">Natural wood finishes for the ultimate retreat.</p>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<CtaBanner
	heading="Dreaming of a Custom Sauna?"
	description="We build saunas and small structures designed to thrive in Minnesota's climate. Let's create your year-round retreat."
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
