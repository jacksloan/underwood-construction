<script lang="ts">
	import Icon from './Icon.svelte';

	let submitted = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		submitted = true;
	}
</script>

<section class="bg-white py-section-gap-lg" id="contact">
	<div class="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
		<div class="grid grid-cols-1 gap-16 lg:grid-cols-12">
			<!-- Contact Info -->
			<div class="lg:col-span-5">
				<h2 class="mb-8 font-serif text-[40px] font-semibold leading-[48px] text-forest-evergreen">Connect With Us</h2>
				<p class="mb-12 text-[18px] leading-7 text-on-surface-variant">
					For any inquiries, questions, or project commendations, please reach out. We look forward to discussing your vision.
				</p>
				<div class="space-y-10">
					<div class="flex items-center gap-6">
						<div class="flex h-14 w-14 items-center justify-center bg-surface-container-high">
							<Icon name="location_on" class="text-forest-evergreen" />
						</div>
						<div>
							<p class="text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-forest-evergreen">Our Studio</p>
							<p class="text-on-surface-variant">31755 County Highway 1, Underwood, MN 56586</p>
						</div>
					</div>
					<div class="flex items-center gap-6">
						<div class="flex h-14 w-14 items-center justify-center bg-surface-container-high">
							<Icon name="call" class="text-forest-evergreen" />
						</div>
						<div>
							<p class="text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-forest-evergreen">Direct Line</p>
							<p class="text-on-surface-variant">320-248-4774</p>
						</div>
					</div>
				</div>
			</div>
			<!-- Contact Form -->
			<div class="bg-sapwood-cream p-8 shadow-sm md:p-12 lg:col-span-7">
				{#if submitted}
					<div class="flex flex-col items-center justify-center py-16 text-center">
						<Icon name="check_circle" class="mb-4 text-6xl text-forest-evergreen" />
						<h3 class="mb-2 font-serif text-[28px] font-semibold text-forest-evergreen">Thanks for submitting!</h3>
						<p class="text-on-surface-variant">We will contact you soon.</p>
					</div>
				{:else}
					<form class="grid grid-cols-1 gap-6 md:grid-cols-2" onsubmit={handleSubmit}>
						<div class="md:col-span-1">
							<label for="contact-first-name" class="label mb-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">First Name</label>
							<input id="contact-first-name" type="text" required class="input input-bordered w-full rounded-none border-outline-variant bg-white focus:border-harvest-oak focus:outline-none" />
						</div>
						<div class="md:col-span-1">
							<label for="contact-last-name" class="label mb-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">Last Name</label>
							<input id="contact-last-name" type="text" required class="input input-bordered w-full rounded-none border-outline-variant bg-white focus:border-harvest-oak focus:outline-none" />
						</div>
						<div class="md:col-span-2">
							<label for="contact-email" class="label mb-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">Email Address</label>
							<input id="contact-email" type="email" required class="input input-bordered w-full rounded-none border-outline-variant bg-white focus:border-harvest-oak focus:outline-none" />
						</div>
						<div class="md:col-span-2">
							<label for="contact-subject" class="label mb-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">Subject</label>
							<input id="contact-subject" type="text" class="input input-bordered w-full rounded-none border-outline-variant bg-white focus:border-harvest-oak focus:outline-none" />
						</div>
						<div class="md:col-span-2">
							<label for="contact-message" class="label mb-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-forest-evergreen">Message</label>
							<textarea id="contact-message" required rows="4" class="textarea textarea-bordered w-full rounded-none border-outline-variant bg-white focus:border-harvest-oak focus:outline-none"></textarea>
						</div>
						<div class="md:col-span-2">
							<button type="submit" class="btn btn-primary w-full rounded-none text-[14px] font-semibold uppercase tracking-[0.1em] hover:bg-harvest-oak">
								SUBMIT INQUIRY
							</button>
						</div>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
