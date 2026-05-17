<script lang="ts">
	import { page } from '$app/state';
	import Icon from '$lib/components/Icon.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	const slug = $derived(page.url.pathname.replace(/\//g, '-').replace(/^-/, ''));
	const heroTransition = $derived(`view-transition-name: ${slug}`);
</script>

<svelte:head>
	<title>Small Timber Frame Workshop | Under Wood Construction</title>
	<meta name="description" content="A purpose-built timber frame workshop featuring exposed structural beams and practical design. Built by Under Wood Construction in Minnesota." />
	<meta property="og:title" content="Small Timber Frame Workshop | Under Wood Construction" />
	<meta property="og:description" content="A purpose-built timber frame workshop with exposed beams and practical design." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://underwoodconstruction.com/images/project-4-small-timberframe-workshop.jpg" />
</svelte:head>

<!-- Hero Section -->
<section class="relative flex h-[70vh] w-full items-end md:h-[85vh]">
	<img
		alt="Small Timber Frame Workshop"
		class="absolute inset-0 h-full w-full object-cover contrast-[1.1] grayscale-[20%]"
		style={heroTransition}
		src="/images/project-4-small-timberframe-workshop.jpg"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-forest-evergreen/80 to-transparent"></div>
	<div class="relative mx-auto w-full max-w-container-max px-margin-mobile pb-16 md:px-gutter md:pb-24">
		<div class="max-w-3xl">
			<span class="mb-6 inline-block bg-harvest-oak px-3 py-1 text-[14px] font-semibold uppercase tracking-[0.1em] text-sapwood-cream">TIMBER FRAME STRUCTURES</span>
			<h1 class="mb-4 font-serif text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-sapwood-cream">Small Timber Frame Workshop</h1>
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
					<p class="font-serif text-[20px] font-semibold text-forest-evergreen">Workshop</p>
				</div>
			</div>
			<div class="flex items-center gap-4">
				<Icon name="event_available" class="text-2xl text-harvest-oak" />
				<div>
					<p class="text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-on-surface-variant">Category</p>
					<p class="font-serif text-[20px] font-semibold text-forest-evergreen">Timber Frame</p>
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
				<h2 class="mb-8 font-serif text-[40px] font-semibold leading-[48px] text-forest-evergreen">A Craftsman's Space</h2>
				<div class="space-y-6">
					<p class="text-[18px] leading-7 text-on-surface-variant">
						This compact timber frame workshop was designed for the working craftsman who demands both beauty and function from their workspace. The exposed frame structure provides open sightlines and flexible layout options, while the timber construction ensures decades of reliable service.
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">EXPOSED FRAMING</span>
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">PRACTICAL DESIGN</span>
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">OPEN LAYOUT</span>
					</div>
				</div>
			</div>
			<div class="lg:col-span-7">
				<div class="border border-outline-variant bg-base-100 p-2 shadow-sm">
					<img
						alt="Small Timber Frame Workshop Detail"
						class="aspect-[4/3] w-full object-cover"
						src="/images/project-4-small-timberframe-workshop.jpg"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<CtaBanner
	heading="Need a Custom Workshop?"
	description="We design and build timber frame workshops and outbuildings tailored to your craft and your property."
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
