<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	type Project = {
		category: string;
		title: string;
		description: string;
		image: string;
		href: string;
		icon?: string;
		variant?: 'default' | 'portrait' | 'horizontal';
		bg?: string;
		colSpan: string;
	};

	const projects: Project[] = [
		{
			category: 'TIMBER FRAME STRUCTURES',
			title: 'The Heritage Pavilion',
			description: 'Traditional mortise and tenon joinery meets modern architectural design. A masterclass in structural integrity and aesthetic warmth.',
			image: '/images/project-8-pavillion-assembly.png',
			icon: 'architecture',
			href: '/projects/heritage-pavilion',
			colSpan: 'md:col-span-8'
		},
		{
			category: 'NEW CONSTRUCTION',
			title: 'Grand Marais Strawbale Home',
			description: "A sustainable new build combining strawbale insulation with modern construction techniques on Minnesota's North Shore.",
			image: '/images/project-9-south-east.jpeg',
			href: '/projects/grand-marais-strawbale',
			variant: 'portrait',
			bg: 'bg-surface-container',
			colSpan: 'md:col-span-4'
		},
		{
			category: 'TIMBER FRAME STRUCTURES',
			title: 'Lakeside Timber Frame',
			description: 'A stunning lakeside timber frame celebrating the raw beauty of hand-finished beams and traditional joinery.',
			image: '/images/project-1-lakeside-timberframe.png',
			href: '/projects/lakeside-timber-frame',
			variant: 'portrait',
			bg: 'bg-surface-container-high',
			colSpan: 'md:col-span-4'
		},
		{
			category: 'REMODELING',
			title: 'Underwood Gambrel Remodel',
			description: 'A full-scale renovation of a classic gambrel-style home, modernizing systems while preserving its original character.',
			image: '/images/project-7-underwood-gambrel-remodel.jpg',
			href: '/projects/underwood-gambrel-remodel',
			variant: 'horizontal',
			colSpan: 'md:col-span-8'
		},
		{
			category: 'SMALL & SUSTAINABLE',
			title: 'Leech Lake Sauna',
			description: 'A custom-built sauna near Leech Lake, designed for durability and relaxation in Minnesota\'s harsh climate.',
			image: '/images/project-3-sauna-exterior.jpg',
			href: '/projects/leech-lake-sauna',
			variant: 'portrait',
			colSpan: 'md:col-span-4'
		},
		{
			category: 'TIMBER FRAME STRUCTURES',
			title: 'Timber Frame Raising',
			description: 'The dramatic moment a timber frame comes together — massive beams lifted into place through teamwork and precision engineering.',
			image: '/images/project-6-timber-frame-raising.png',
			href: '/projects/timber-frame-raising',
			variant: 'horizontal',
			bg: 'bg-surface-container',
			colSpan: 'md:col-span-8'
		},
		{
			category: 'SMALL & SUSTAINABLE',
			title: 'Rustic Shed',
			description: 'A compact, functional outbuilding built with reclaimed materials and traditional craftsmanship.',
			image: '/images/project-2-rustic-shed.jpg',
			href: '/projects/rustic-shed',
			variant: 'portrait',
			bg: 'bg-surface-container-high',
			colSpan: 'md:col-span-4'
		},
		{
			category: 'TIMBER FRAME STRUCTURES',
			title: 'Timber Frame Entry',
			description: 'A grand timber frame entryway that sets the tone for the entire home with exposed beams and expert joinery.',
			image: '/images/project-5-timber-frame-entry.png',
			href: '/projects/timber-frame-entry',
			variant: 'portrait',
			colSpan: 'md:col-span-4'
		},
		{
			category: 'TIMBER FRAME STRUCTURES',
			title: 'Small Timber Frame Workshop',
			description: 'A purpose-built workshop featuring exposed timber framing and practical design for the working craftsman.',
			image: '/images/project-4-small-timberframe-workshop.jpg',
			href: '/projects/small-timber-frame-workshop',
			variant: 'portrait',
			bg: 'bg-surface-container',
			colSpan: 'md:col-span-4'
		}
	];

	const filters = [
		'All Projects',
		'Timber Frame Structures',
		'New Construction',
		'Remodeling',
		'Small & Sustainable'
	];

	let activeFilter = $state('All Projects');
	let animating = $state(false);

	const filteredProjects = $derived(
		activeFilter === 'All Projects'
			? projects
			: projects.filter((p) => p.category === activeFilter.toUpperCase())
	);

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
			{#each filteredProjects as project (project.href)}
				<div class="{project.colSpan}">
					<ProjectCard
						category={project.category}
						title={project.title}
						description={project.description}
						image={project.image}
						href={project.href}
						icon={project.icon}
						variant={project.variant}
						bg={project.bg}
					/>
				</div>
			{/each}
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
