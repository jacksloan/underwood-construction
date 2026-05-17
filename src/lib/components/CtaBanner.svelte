<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from './Icon.svelte';

	let {
		heading = 'Ready to start your legacy project?',
		description = 'We are currently accepting inquiries for new construction and timber frame structures for the upcoming season.',
		phone = '320-248-4774',
		children
	}: {
		heading?: string;
		description?: string;
		phone?: string;
		children?: Snippet;
	} = $props();
</script>

<section class="relative overflow-hidden bg-forest-evergreen py-section-gap-lg">
	<div class="relative z-10 mx-auto max-w-container-max px-margin-mobile text-center md:px-gutter">
		<h2 class="mb-8 font-serif text-[40px] font-semibold leading-[48px] text-sapwood-cream">{heading}</h2>
		<div class="flex flex-col items-center gap-6">
			<p class="mx-auto max-w-2xl text-[18px] leading-7 text-sapwood-cream/80">
				{description}
			</p>
			{#if children}
				{@render children()}
			{:else}
				<a
					href="tel:{phone}"
					class="inline-flex items-center gap-3 font-serif text-[28px] font-semibold leading-9 text-harvest-oak transition-colors duration-300 hover:text-sapwood-cream"
				>
					<Icon name="phone_in_talk" /> {phone}
				</a>
			{/if}
		</div>
	</div>
	<!-- Decorative Background Element -->
	<div class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
		<Icon name="carpenter" class="text-[600px] text-sapwood-cream" />
	</div>
</section>
