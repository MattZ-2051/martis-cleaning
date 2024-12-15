<script lang="ts">
	import Button from '$lib/ui/components/button.svelte';
	import Input from '$lib/ui/components/input.svelte';
</script>

<div class="py-24 lg:px-8">
	<div
		class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
		aria-hidden="true"
	>
		<div
			class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-2xl font-semibold tracking-tight text-black sm:text-5xl">Contact Us</h2>
		<p class="mt-2 text-lg/8">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
	</div>
	<form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
		<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
			<div>
				<label for="first-name" class="block text-sm/6 font-semibold text-gray-900"
					>First name</label
				>
				<div class="mt-2.5">
					<input
						type="text"
						name="first-name"
						id="first-name"
						autocomplete="given-name"
						class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
					/>
				</div>
			</div>
			<div>
				<label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Last name</label>
				<div class="mt-2.5">
					<input
						type="text"
						name="last-name"
						id="last-name"
						autocomplete="family-name"
						class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="company" class="block text-sm/6 font-semibold text-gray-900">Company</label>
				<div class="mt-2.5">
					<input
						type="text"
						name="company"
						id="company"
						autocomplete="organization"
						class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<Input label="email" />
			</div>
			<div class="sm:col-span-2">
				<Input label="phone number" />
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
				<div class="mt-2.5">
					<textarea
						name="message"
						id="message"
						rows="4"
						class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
					></textarea>
				</div>
			</div>
		</div>
		<div class="mt-10">
			<Button label={'Submit'} />
		</div>
	</form>
</div>
