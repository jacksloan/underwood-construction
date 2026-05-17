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
					image="https://lh3.googleusercontent.com/aida/ADBb0uj3TAgU5cFpd3BZ4cP6UwbGr5kLKDn0BQMGOKgerOyDDJkBzU5B7mx819gZ1uTAwT2CUHCC5KpEJGDR_5xN77xSb-AIrwecqKxbjOiarABtc2lySdwXL0pZkRgu_u451DytN3BbZdrbMiimABHHM4s2DQJ8-5QlXmN8u8WnUifpP3pM8SCEtLVcgJAQdtWIpZdrMO9oqPhFVeynoecb4os67At4DnaweLuWcc98XaQ5ZlQbeF5z6le-8e8"
					icon="architecture"
					href="/projects/heritage-pavilion"
					transitionName="project-heritage-pavilion"
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
					image="https://lh3.googleusercontent.com/aida/ADBb0ujxg5WPfrqKUujfBaWIrf9T3PsdzfwOqE2Gs795TsaIK1iC4PYj3NR-lc76hjNL54WKMdRREHnF6WbwAtR4kjFTwotgdafIDvLV67Ne_JL_d0ZGguqSXpo2d-7U9l7bWDTy5BJYw3IqYZgLM1ey_MtiZnHT5LiIIHp87nqWXZsJDJsSq5qVc-eU3ra5c6TuIILgRk7i0PHeDPbbdQi5SbdcaM64tLwmnJ7pUnklGsdE23xhAyk-KWsNJEE"
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
					image="https://lh3.googleusercontent.com/aida/ADBb0ujReW7dm4MpTle1t3Ozra7Pf7oi518_3nticHmlQQDN2JJXJjmSZ4akQEFZyJJt7Go2vyJUPu4t7DzEPDTwyzwsv7oInO9eGIPwpL3BCvD69dnKPo8kNxcuLOfM_K9cigNSQ38Sn37-qSokVZmPmrDdwUox01tjO5cASoGQKYh1Mu1pwewM1ddrobISfXg9gxYRpo-yk9wD6h8NbiChysrDft9Eu-U94iRAG-BNDcCJHVPaxJ-JcOk6eA"
				/>
			</div>

			<!-- Timber Frame Secondary (horizontal) -->
			<div class="md:col-span-8">
				<ProjectCard
					variant="horizontal"
					category="TIMBER FRAME STRUCTURES"
					title="Lakeside Frame Barn"
					description="A robust, functional space celebrating the raw beauty of kiln-dried pine and hand-finished timbers."
					image="https://lh3.googleusercontent.com/aida/ADBb0uiI0k2i7tihyYKFC4I-A6Y3pMGamNptYCI2dsZWuunnBgjkRLSlmbcIdjxJXQtezROCFQ42smQcChWV_nB_fIFIcatw_kOvtlfK-ARTgLc3GRrlU8jxwpVC65S889q5HzZctGfDKkn799KyzwgI9WeOrFpFM1vSYXgtDMsvwwjDu2WHSWoz0EKAt7YrBPDeWviIn41BJZ5_E-_96tcOtvNfg-SSOpZG8QB7KMXwnmK4Cg3H90IBybCXyg"
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
