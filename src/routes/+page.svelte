<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Under Wood Construction | General Contractor Ely & North Shore MN</title>
	<meta name="description" content="Under Wood Construction is a licensed and insured general contractor serving Ely, Grand Marais, North Shore, and the Arrowhead Region of Minnesota. Specializing in new construction, remodeling, and timber frame structures." />
	<meta name="keywords" content="general contractor Ely MN, timber frame North Shore, construction Grand Marais, remodeling Lutsen, builder Cook County Minnesota, contractor Arrowhead Region, home builder Tofte, Silver Bay contractor, Hovland construction, Fergus Falls contractor, Underwood MN builder, general contractor Detroit Lakes, construction Pelican Rapids, Battle Lake builder, Perham contractor, Alexandria MN construction, Duluth contractor, Otter Tail County builder" />
	<meta name="geo.region" content="US-MN" />
	<meta name="geo.placename" content="Ely, Minnesota" />
	<meta property="og:title" content="Under Wood Construction | General Contractor Ely & North Shore MN" />
	<meta property="og:description" content="Licensed and insured general contractor devoted to craftsmanship. Serving Ely, Grand Marais, the North Shore, and Cook County, Minnesota." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://underwoodconstruction.com" />
	<meta property="og:image" content="https://underwoodconstruction.com/images/logo.jpg" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Under Wood Construction | General Contractor Ely & North Shore MN" />
	<meta name="twitter:description" content="Licensed and insured general contractor devoted to craftsmanship. Serving Ely, Grand Marais, the North Shore, and Cook County, Minnesota." />
	<meta name="twitter:image" content="https://underwoodconstruction.com/images/logo.jpg" />
</svelte:head>

<!-- Hero Section -->
<section class="hero relative min-h-[90vh] overflow-hidden bg-forest-evergreen" id="home">
	<div class="absolute inset-0 z-0">
		<img
			alt="Primary Timber Frame Structure"
			class="h-full w-full scale-105 object-cover opacity-60 transition-transform duration-[10000ms] hover:scale-100"
			src="/images/home-hero.avif"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-forest-evergreen via-forest-evergreen/40 to-transparent"></div>
	</div>
	<div class="relative z-10 mx-auto flex min-h-[90vh] max-w-container-max items-center px-margin-mobile py-section-gap-md md:px-gutter">
		<div class="max-w-3xl">
			<span class="badge badge-secondary mb-6 rounded-none px-4 py-1 text-[14px] font-semibold uppercase tracking-[0.1em]">ESTABLISHED CRAFTSMANSHIP</span>
			<h1 class="mb-8 font-serif text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-sapwood-cream">
				DEVOTED TO CRAFTSMANSHIP AND CUSTOMER SERVICE
			</h1>
			<p class="mb-10 max-w-xl text-[18px] leading-7 text-sapwood-cream/90">
				Precision-built homes and monumental timber structures designed for longevity, heritage, and unparalleled quality in every joint.
			</p>
			<div class="flex flex-col gap-4 sm:flex-row">
				<a href="#contact" class="btn btn-secondary rounded-none border-secondary px-10 py-4 text-[14px] font-semibold uppercase tracking-[0.1em] hover:bg-forest-evergreen">
					GET A QUOTE
				</a>
				<a href="#services" class="btn btn-outline rounded-none border-sapwood-cream px-10 py-4 text-[14px] font-semibold uppercase tracking-[0.1em] text-sapwood-cream hover:bg-sapwood-cream hover:text-forest-evergreen">
					VIEW SERVICES
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Services Bento Grid -->
<section class="bg-surface-bright py-section-gap-lg" id="services">
	<div class="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
		<div class="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
			<div>
				<span class="mb-2 block text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-harvest-oak">OUR EXPERTISE</span>
				<h2 class="font-serif text-[40px] font-semibold leading-[48px] text-forest-evergreen">Specialized Construction Services</h2>
			</div>
			<p class="max-w-md text-[16px] leading-6 text-on-surface-variant">
				From foundational integrity to the final architectural flourish, we bring technical excellence to every phase of your build.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-12">
			<!-- Service 1: New Construction -->
			<div class="md:col-span-7">
				<ServiceCard
					icon="foundation"
					title="New Construction"
					description="From foundations to finishes, Under Wood Construction is equipped to tackle your project from the ground up. We build beautiful, functional homes with a focus on structural permanence."
					ctaLabel="INQUIRE ABOUT BUILDS"
					ctaHref="#contact"
				>
					<div class="overflow-hidden my-4">
						<img
							alt="Modern clean interior finishes"
							class="w-full transition-transform duration-700 hover:scale-105"
							src="/images/project-9-studio.jpeg"
						/>
					</div>
				</ServiceCard>
			</div>
			<!-- Service 2: Remodeling -->
			<div class="md:col-span-5">
				<ServiceCard
					icon="handyman"
					title="Remodeling"
					description='Navigating projects through old homes can be tricky. We have years of experience handling the unique "surprises" that historic structures often hide.'
					variant="dark"
				>
					<img
						alt="Remodeling detail work"
						class="h-48 w-full object-cover brightness-75 grayscale transition-all duration-700 hover:grayscale-0 hover:brightness-100"
						src="/images/project-7-underwood-gambrel-remodel.jpg"
					/>
				</ServiceCard>
			</div>
			<!-- Service 3: Timber Frame -->
			<div class="md:col-span-12">
				<ServiceCard
					icon="forest"
					title="Timber Frame Structures & Accents"
					description="Timber framing combines beauty, function, and form. We work alongside a team of exceptional craftsmen to bring these massive, elegant projects to life, creating spaces that breathe and inspire."
					variant="wide"
				>
					<ul class="mb-10 space-y-4">
						<li class="flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">
							<span class="h-[1px] w-6 bg-harvest-oak"></span> CUSTOM JOINERY
						</li>
						<li class="flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">
							<span class="h-[1px] w-6 bg-harvest-oak"></span> SUSTAINABLE MATERIALS
						</li>
						<li class="flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">
							<span class="h-[1px] w-6 bg-harvest-oak"></span> STRUCTURAL ARTISTRY
						</li>
					</ul>
					{#snippet image()}
						<img
							alt="Timber Frame Detail"
							class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
							src="/images/project-1-lakeside-timberframe.png"
						/>
					{/snippet}
				</ServiceCard>
			</div>
		</div>
	</div>
</section>

<!-- About Section -->
<section class="bg-sapwood-cream py-section-gap-lg" id="about">
	<div class="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
		<div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
			<div class="lg:col-span-5">
				<div class="relative">
					<img
						alt="Completed Residential Project"
						class="relative z-10 aspect-[4/5] w-full object-cover shadow-2xl"
						src="/images/project-3-sauna-exterior.jpg"
					/>
					<div class="absolute -left-6 -top-6 z-0 h-32 w-32 border-l-2 border-t-2 border-harvest-oak"></div>
					<div class="absolute -bottom-6 -right-6 z-0 h-32 w-32 border-b-2 border-r-2 border-harvest-oak"></div>
				</div>
			</div>
			<div class="lg:col-span-7">
				<span class="mb-4 block text-[14px] font-semibold uppercase tracking-widest text-harvest-oak">The Firm</span>
				<h2 class="mb-8 font-serif text-[40px] font-semibold leading-[48px] text-forest-evergreen">Committed to Professional Excellence</h2>
				<div class="space-y-6">
					<p class="text-[18px] leading-relaxed text-on-surface-variant">
						Under Wood Construction is a fully licensed and insured construction company. Our top priorities are customer service and satisfaction. We aim for quality and excellence in all of the work we do.
					</p>
					<p class="text-[16px] leading-relaxed text-on-surface-variant">
						Based in Underwood, MN, we have experience building unique projects and working across multiple locations. Whether it's a remote cabin or a modern suburban residence, we apply the same artisanal rigor to every site.
					</p>
				</div>
				<div class="mt-12 grid grid-cols-1 gap-8 border-t border-outline-variant pt-12 md:grid-cols-2">
					<div class="flex items-start gap-4">
						<Icon name="verified" class="text-3xl text-harvest-oak" />
						<div>
							<h4 class="mb-1 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">CARTER GJEVRE</h4>
							<p class="text-sm text-on-surface-variant">Owner &amp; Principal Craftsman</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<Icon name="construction" class="text-3xl text-harvest-oak" />
						<div>
							<h4 class="mb-1 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">LICENSE BC-807199</h4>
							<p class="text-sm text-on-surface-variant">Fully Bonded &amp; Certified Lead Renovator</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Banner -->
<CtaBanner />

<!-- Contact -->
<ContactForm />
