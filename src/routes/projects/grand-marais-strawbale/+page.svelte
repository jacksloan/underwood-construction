<script lang="ts">
	import { page } from '$app/state';
	import Icon from '$lib/components/Icon.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	const slug = $derived(page.url.pathname.replace(/\//g, '-').replace(/^-/, ''));
	const heroTransition = $derived(`view-transition-name: ${slug}`);
</script>

<svelte:head>
	<title>Grand Marais Strawbale Home | Under Wood Construction</title>
	<meta name="description" content="A sustainable new construction combining strawbale insulation with modern building techniques on Minnesota's North Shore. Built by Under Wood Construction in Grand Marais." />
	<meta property="og:title" content="Grand Marais Strawbale Home | Under Wood Construction" />
	<meta property="og:description" content="Sustainable strawbale construction with modern techniques on Minnesota's North Shore." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://underwoodconstruction.com/images/project-9-south-east.jpeg" />
</svelte:head>

<!-- Hero Section -->
<section class="relative flex h-[70vh] w-full items-end md:h-[85vh]">
	<img
		alt="Grand Marais Strawbale Home"
		class="absolute inset-0 h-full w-full object-cover contrast-[1.1] grayscale-[20%]"
		style={heroTransition}
		src="/images/project-9-south-east.jpeg"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-forest-evergreen/80 to-transparent"></div>
	<div class="relative mx-auto w-full max-w-container-max px-margin-mobile pb-16 md:px-gutter md:pb-24">
		<div class="max-w-3xl">
			<span class="mb-6 inline-block bg-harvest-oak px-3 py-1 text-[14px] font-semibold uppercase tracking-[0.1em] text-sapwood-cream">NEW CONSTRUCTION</span>
			<h1 class="mb-4 font-serif text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-sapwood-cream">Grand Marais Strawbale Home</h1>
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
					<p class="font-serif text-[20px] font-semibold text-forest-evergreen">Strawbale New Construction</p>
				</div>
			</div>
			<div class="flex items-center gap-4">
				<Icon name="event_available" class="text-2xl text-harvest-oak" />
				<div>
					<p class="text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-on-surface-variant">Category</p>
					<p class="font-serif text-[20px] font-semibold text-forest-evergreen">New Construction</p>
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
				<h2 class="mb-8 font-serif text-[40px] font-semibold leading-[48px] text-forest-evergreen">Sustainable Living on the North Shore</h2>
				<div class="space-y-6">
					<p class="text-[18px] leading-7 text-on-surface-variant">
						This ground-up build in Grand Marais combines the exceptional insulation properties of strawbale construction with modern building science. The result is a home that's supremely energy-efficient, naturally breathable, and beautifully integrated into the Cook County landscape. Panel assembly and careful moisture management ensure longevity in Minnesota's demanding climate.
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">STRAWBALE INSULATION</span>
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">ENERGY EFFICIENT</span>
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">NORTH SHORE</span>
					</div>
				</div>
			</div>
			<div class="lg:col-span-7">
				<div class="border border-outline-variant bg-base-100 p-2 shadow-sm">
					<img
						alt="Strawbale Wall Construction with Blueskin Moisture Barrier"
						class="aspect-[4/3] w-full object-cover"
						src="/images/project-9-grand-marais-strawbale-blueskin.jpg"
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
						alt="Panel Assembly"
						class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="/images/project-9-panel-assembly.jpeg"
					/>
				</div>
				<h3 class="mb-1 font-serif text-[20px] font-semibold text-forest-evergreen">Panel Assembly</h3>
				<p class="text-[16px] leading-6 text-on-surface-variant/70">Prefabricated panels prepared for efficient on-site installation.</p>
			</div>
			<div class="group cursor-pointer lg:translate-y-12">
				<div class="mb-4 overflow-hidden border border-outline-variant/30">
					<img
						alt="Strawbale Wall Section"
						class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="/images/project-9-grand-marais-strawbale.jpg"
					/>
				</div>
				<h3 class="mb-1 font-serif text-[20px] font-semibold text-forest-evergreen">Strawbale Walls</h3>
				<p class="text-[16px] leading-6 text-on-surface-variant/70">Natural insulation providing superior thermal performance.</p>
			</div>
			<div class="group cursor-pointer">
				<div class="mb-4 overflow-hidden border border-outline-variant/30">
					<img
						alt="Sauna Frame Construction"
						class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="/images/project-9-grand-marais-sauna-frame.jpg"
					/>
				</div>
				<h3 class="mb-1 font-serif text-[20px] font-semibold text-forest-evergreen">Framing Detail</h3>
				<p class="text-[16px] leading-6 text-on-surface-variant/70">Precise structural framing for long-term durability.</p>
			</div>
			<div class="group cursor-pointer">
				<div class="mb-4 overflow-hidden border border-outline-variant/30">
					<img
						alt="Interior View"
						class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="/images/project-9-interior.jpeg"
					/>
				</div>
				<h3 class="mb-1 font-serif text-[20px] font-semibold text-forest-evergreen">Interior Spaces</h3>
				<p class="text-[16px] leading-6 text-on-surface-variant/70">Open, light-filled rooms with natural finishes.</p>
			</div>
			<div class="group cursor-pointer lg:translate-y-12">
				<div class="mb-4 overflow-hidden border border-outline-variant/30">
					<img
						alt="Kitchen Island"
						class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="/images/project-9-island.jpeg"
					/>
				</div>
				<h3 class="mb-1 font-serif text-[20px] font-semibold text-forest-evergreen">Custom Kitchen</h3>
				<p class="text-[16px] leading-6 text-on-surface-variant/70">Handcrafted kitchen island and cabinetry.</p>
			</div>
			<div class="group cursor-pointer">
				<div class="mb-4 overflow-hidden border border-outline-variant/30">
					<img
						alt="Studio Space"
						class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="/images/project-9-studio.jpeg"
					/>
				</div>
				<h3 class="mb-1 font-serif text-[20px] font-semibold text-forest-evergreen">Studio Space</h3>
				<p class="text-[16px] leading-6 text-on-surface-variant/70">A dedicated creative workspace within the home.</p>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<CtaBanner
	heading="Interested in Sustainable Building?"
	description="From strawbale to timber frame, we specialize in construction methods that are as good for the environment as they are for your family."
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
