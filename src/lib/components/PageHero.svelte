<script lang="ts">
	let {
		label,
		heading,
		description
	}: {
		label: string;
		heading: string;
		description: string;
	} = $props();
</script>

<section class="relative overflow-hidden bg-base-200 py-section-gap-lg">
	<div class="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-gutter">
		<div class="max-w-3xl">
			<span class="mb-4 block text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-harvest-oak">{label}</span>
			<h1 class="mb-6 font-serif text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-forest-evergreen">
				{heading}
			</h1>
			<p class="mb-8 max-w-2xl text-[18px] leading-7 text-on-surface-variant">
				{description}
			</p>
		</div>
	</div>
	<!-- Structural Decoration -->
	<div class="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 opacity-10 lg:block">
		<div class="h-full w-full border-l border-dashed border-forest-evergreen"></div>
	</div>
</section>
