<script lang="ts">
	import Icon from './Icon.svelte';
</script>

<footer class="bg-primary text-primary-content">
	<div class="mx-auto flex max-w-container-max flex-col gap-12 px-margin-mobile py-section-gap-md md:flex-row md:justify-between md:px-gutter">
		<div class="md:max-w-xs">
			<div class="mb-6 flex items-center gap-3">
				<h2 class="font-serif text-[28px] font-semibold uppercase leading-9 tracking-tight text-sapwood-cream">Under Wood</h2>
			</div>
			<p class="mb-8 text-[16px] leading-6 text-sapwood-cream/70">
				Crafting monumental structures and refined living spaces with a devotion to the art of timber and stone.
			</p>
			<div class="flex gap-4">
				<a href="/" class="btn btn-circle btn-ghost btn-sm border border-sapwood-cream/20 text-sapwood-cream hover:border-secondary hover:bg-secondary">
					<Icon name="public" class="text-lg" />
				</a>
				<a href="/" class="btn btn-circle btn-ghost btn-sm border border-sapwood-cream/20 text-sapwood-cream hover:border-secondary hover:bg-secondary">
					<Icon name="group" class="text-lg" />
				</a>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-12">
			<div>
				<h4 class="mb-6 text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-harvest-oak">Navigation</h4>
				<ul class="space-y-4">
					<li><a class="text-[16px] leading-6 text-sapwood-cream/80 transition-colors hover:text-sapwood-cream" href="/#services">Services</a></li>
					<li><a class="text-[16px] leading-6 text-sapwood-cream/80 transition-colors hover:text-sapwood-cream" href="/projects">Projects</a></li>
					<li><a class="text-[16px] leading-6 text-sapwood-cream/80 transition-colors hover:text-sapwood-cream" href="/#about">About Us</a></li>
					<li><a class="text-[16px] leading-6 text-sapwood-cream/80 transition-colors hover:text-sapwood-cream" href="/#contact">Contact</a></li>
				</ul>
			</div>
			<div>
				<h4 class="mb-6 text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-harvest-oak">Legal</h4>
				<ul class="space-y-4">
					<li><a class="text-[16px] leading-6 text-sapwood-cream/80 transition-colors hover:text-sapwood-cream" href="/">Privacy Policy</a></li>
					<li><a class="text-[16px] leading-6 text-sapwood-cream/80 transition-colors hover:text-sapwood-cream" href="/">Terms of Service</a></li>
					<li><a class="text-[16px] leading-6 text-sapwood-cream/80 transition-colors hover:text-sapwood-cream" href="/">License Info</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="mx-auto max-w-container-max border-t border-sapwood-cream/10 px-margin-mobile py-8 md:px-gutter">
		<p class="text-center text-[12px] font-semibold uppercase tracking-wider text-sapwood-cream/50 md:text-left">
			© 2024 Under Wood Construction. All rights reserved. Licensed &amp; Bonded. MN License BC-807199.
		</p>
	</div>
</footer>
