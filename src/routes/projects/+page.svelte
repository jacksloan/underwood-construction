<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	const filters = [
		'All Projects',
		'Timber Frame Structures',
		'New Construction',
		'Remodeling',
		'Small & Sustainable'
	];

	let activeFilter = $state('All Projects');
	let animating = $state(false);

	function setFilter(filter: string) {
		if (filter === activeFilter) return;
		animating = true;
		activeFilter = filter;
		setTimeout(() => {
			animating = false;
		}, 300);
	}
</script>

<svelte:head>
	<title>Projects | Under Wood Construction</title>
	<meta name="description" content="Explore our portfolio of timber frame structures, new construction, remodeling, and sustainable building projects." />
</svelte:head>

<!-- Hero -->
<PageHero
	label="PORTFOLIO"
	heading="Our Legacy of Craft"
	description="At Under Wood Construction, we believe a home is more than shelter—it's a testament to heritage. Our commitment to building structures that last for generations is etched into every joint and timber."
/>

<!-- Project Filter / Gallery -->
<section class="bg-base-100 py-section-gap-md">
	<div class="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
		<!-- Filter Tabs -->
		<div class="mb-12 flex flex-wrap gap-4 border-b border-outline-variant pb-6">
			{#each filters as filter}
				<button
					class="btn btn-sm rounded-full text-[14px] font-semibold uppercase tracking-[0.1em] transition-all
						{activeFilter === filter
							? 'btn-primary'
							: 'btn-ghost text-forest-evergreen hover:bg-base-300'}"
					onclick={() => setFilter(filter)}
				>
					{filter}
				</button>
			{/each}
		</div>

		<!-- Bento-style Grid -->
		<div class="grid grid-cols-1 gap-8 transition-opacity duration-300 md:grid-cols-12" class:opacity-30={animating}>
			<!-- Timber Frame Large Card -->
			<div class="md:col-span-8">
				<ProjectCard
					category="TIMBER FRAME STRUCTURES"
					title="The Heritage Pavillion"
					description="Traditional mortise and tenon joinery meets modern architectural design. A masterclass in structural integrity and aesthetic warmth."
					image="/images/pavillion.png"
					icon="architecture"
					href="/projects/heritage-pavilion"
				/>
			</div>

			<!-- New Construction Sidebar -->
			<div class="md:col-span-4">
				<ProjectCard
					variant="portrait"
					bg="bg-surface-container"
					category="NEW CONSTRUCTION"
					title="Modern Estate Home"
					description="A comprehensive ground-up build prioritizing energy efficiency and luxury finishes."
					image="/images/grand-marais-strawbale.jpg"
				/>
			</div>

			<!-- Small & Sustainable -->
			<div class="md:col-span-4">
				<ProjectCard
					variant="portrait"
					bg="bg-surface-container-high"
					category="SMALL & SUSTAINABLE"
					title="The Eco-Studio"
					description="Maximizing utility in a compact footprint with reclaimed materials and passive design."
					image="/images/rustic-shed.jpg"
				/>
			</div>

			<!-- Timber Frame Secondary (horizontal) -->
			<div class="md:col-span-8">
				<ProjectCard
					variant="horizontal"
					category="TIMBER FRAME STRUCTURES"
					title="Lakeside Frame Barn"
					description="A robust, functional space celebrating the raw beauty of kiln-dried pine and hand-finished timbers."
					image="/images/shotgun-timberframe.jpg"
				/>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<CtaBanner
	heading="Ready to Start Your Project?"
	description="Whether it's a legacy timber frame home or a sustainable remodel, let's build something that lasts. Contact our team to schedule a consultation."
>
	<div class="flex flex-col items-center justify-center gap-6 md:flex-row">
		<a href="tel:320-248-4774" class="btn btn-secondary inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-forest-evergreen">
			<Icon name="call" />
			320-248-4774
		</a>
		<a href="/#contact" class="btn btn-outline inline-flex items-center gap-3 border-sapwood-cream/30 px-8 py-4 text-lg text-sapwood-cream hover:bg-sapwood-cream hover:text-forest-evergreen">
			Request a Quote
		</a>
	</div>
</CtaBanner>
