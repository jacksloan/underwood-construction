<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
</script>

<svelte:head>
	<title>The Heritage Pavilion | Under Wood Construction</title>
	<meta name="description" content="A masterclass in traditional timber framing and modern architectural design featuring hand-cut mortise and tenon joinery." />
</svelte:head>

<!-- Hero Section -->
<section class="relative flex h-[70vh] w-full items-end overflow-hidden md:h-[85vh]">
	<img
		alt="The Heritage Pavilion Finished Frame"
		class="absolute inset-0 h-full w-full object-cover contrast-[1.1] grayscale-[20%]"
		style="view-transition-name: project-heritage-pavilion"
		src="https://lh3.googleusercontent.com/aida/ADBb0uj3TAgU5cFpd3BZ4cP6UwbGr5kLKDn0BQMGOKgerOyDDJkBzU5B7mx819gZ1uTAwT2CUHCC5KpEJGDR_5xN77xSb-AIrwecqKxbjOiarABtc2lySdwXL0pZkRgu_u451DytN3BbZdrbMiimABHHM4s2DQJ8-5QlXmN8u8WnUifpP3pM8SCEtLVcgJAQdtWIpZdrMO9oqPhFVeynoecb4os67At4DnaweLuWcc98XaQ5ZlQbeF5z6le-8e8"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-forest-evergreen/80 to-transparent"></div>
	<div class="relative mx-auto w-full max-w-container-max px-margin-mobile pb-16 md:px-gutter md:pb-24">
		<div class="max-w-3xl">
			<span class="mb-6 inline-block bg-harvest-oak px-3 py-1 text-[14px] font-semibold uppercase tracking-[0.1em] text-sapwood-cream">FEATURED PROJECT</span>
			<h1 class="mb-4 font-serif text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-sapwood-cream">The Heritage Pavilion</h1>
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
					<p class="font-serif text-[20px] font-semibold text-forest-evergreen">Underwood, MN</p>
				</div>
			</div>
			<div class="flex items-center gap-4 md:border-x md:border-outline-variant md:px-8">
				<Icon name="architecture" class="text-2xl text-harvest-oak" />
				<div>
					<p class="text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-on-surface-variant">Type</p>
					<p class="font-serif text-[20px] font-semibold text-forest-evergreen">Timber Frame Structure</p>
				</div>
			</div>
			<div class="flex items-center gap-4">
				<Icon name="event_available" class="text-2xl text-harvest-oak" />
				<div>
					<p class="text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-on-surface-variant">Completion</p>
					<p class="font-serif text-[20px] font-semibold text-forest-evergreen">2023</p>
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
				<h2 class="mb-8 font-serif text-[40px] font-semibold leading-[48px] text-forest-evergreen">Structural Elegance Built for Generations</h2>
				<div class="space-y-6">
					<p class="text-[18px] leading-7 text-on-surface-variant">
						A masterclass in traditional timber framing and modern architectural design. This pavilion features hand-cut mortise and tenon joinery, sustainably sourced kiln-dried oak, and a radial roof assembly that stands as a testament to craftsmanship.
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">TRADITIONAL JOINERY</span>
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">KILN-DRIED OAK</span>
						<span class="rounded-full bg-forest-evergreen/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">CUSTOM DESIGN</span>
					</div>
				</div>
			</div>
			<div class="lg:col-span-7">
				<div class="border border-outline-variant bg-base-100 p-2 shadow-sm">
					<img
						alt="The Radial Roof Assembly Under Construction"
						class="aspect-[4/3] w-full object-cover"
						src="https://lh3.googleusercontent.com/aida/ADBb0ujnjRPUVboJSUGkZsv702_WDzw4BAJhFq17WT5p96MaQQXYDN1saaC56wSrO-_JhDvJvEcO8VuYKDH1VGDIeQxfgwlb15TLD0KqvG7fXRBIn_VTYcbGz_tPkuFbUY_P_4izJttqmqd1E7eE14ngJMcdmLpuMxACFVC91BqEXcgw0POyU7rEnFV0SymbM_zBVevebkNhhdmGiwZKRa4GoUxFbMyT7w6qS0xPQ_MmCbfoX70pS1ey86dIPI0"
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
				<h2 class="font-serif text-[40px] font-semibold leading-[48px] text-forest-evergreen">The Craft in Detail</h2>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<!-- Gallery Item 1 -->
			<div class="group cursor-pointer">
				<div class="mb-4 overflow-hidden border border-outline-variant/30">
					<img
						alt="Traditional Mortise and Tenon Joinery Close-up"
						class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="https://lh3.googleusercontent.com/aida/ADBb0ugAfzpd6GGd-EjayH_e42angiULL06uJZhEsVLaUtQTzzuK_yLyAawaHiNjRakGehjIdF-Gd9uNRF9V7Hw62tZ_Mg_SVtDn9QZFKYHho11VxcndwaQKxXkL5WO6PniG5BTY6zj4U1H9eU7vc2MvdkpwyWN4hj1od8nRgEy7PN4eqcM8AmF1WyPBJFZ-hXGRRsNSDP9Pf-5SeB_cqmSBOiqyAbMymoiTKY4EoQjiKxf5a-yEznAXV3CumQ"
					/>
				</div>
				<h3 class="mb-1 font-serif text-[20px] font-semibold text-forest-evergreen">Precision Joinery</h3>
				<p class="text-[16px] leading-6 text-on-surface-variant/70">Hand-cut details ensuring structural longevity.</p>
			</div>
			<!-- Gallery Item 2 -->
			<div class="group cursor-pointer lg:translate-y-12">
				<div class="mb-4 overflow-hidden border border-outline-variant/30">
					<img
						alt="Timber Framing Radial Roof Structure"
						class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="https://lh3.googleusercontent.com/aida/ADBb0ujnjRPUVboJSUGkZsv702_WDzw4BAJhFq17WT5p96MaQQXYDN1saaC56wSrO-_JhDvJvEcO8VuYKDH1VGDIeQxfgwlb15TLD0KqvG7fXRBIn_VTYcbGz_tPkuFbUY_P_4izJttqmqd1E7eE14ngJMcdmLpuMxACFVC91BqEXcgw0POyU7rEnFV0SymbM_zBVevebkNhhdmGiwZKRa4GoUxFbMyT7w6qS0xPQ_MmCbfoX70pS1ey86dIPI0"
					/>
				</div>
				<h3 class="mb-1 font-serif text-[20px] font-semibold text-forest-evergreen">Radial Engineering</h3>
				<p class="text-[16px] leading-6 text-on-surface-variant/70">A complex roof assembly showcasing old-world techniques.</p>
			</div>
			<!-- Gallery Item 3 -->
			<div class="group cursor-pointer">
				<div class="mb-4 overflow-hidden border border-outline-variant/30">
					<img
						alt="Heritage Pavilion Frame Standing High"
						class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="https://lh3.googleusercontent.com/aida/ADBb0uj3TAgU5cFpd3BZ4cP6UwbGr5kLKDn0BQMGOKgerOyDDJkBzU5B7mx819gZ1uTAwT2CUHCC5KpEJGDR_5xN77xSb-AIrwecqKxbjOiarABtc2lySdwXL0pZkRgu_u451DytN3BbZdrbMiimABHHM4s2DQJ8-5QlXmN8u8WnUifpP3pM8SCEtLVcgJAQdtWIpZdrMO9oqPhFVeynoecb4os67At4DnaweLuWcc98XaQ5ZlQbeF5z6le-8e8"
					/>
				</div>
				<h3 class="mb-1 font-serif text-[20px] font-semibold text-forest-evergreen">Skeletal Integrity</h3>
				<p class="text-[16px] leading-6 text-on-surface-variant/70">The finished frame standing proud in Underwood, MN.</p>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<CtaBanner
	heading="Ready to Build Your Legacy?"
	description="From custom pavilions to timber-framed luxury homes, we bring unrivaled craftsmanship to every project."
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
