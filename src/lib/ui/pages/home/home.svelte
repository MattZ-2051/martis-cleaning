<script lang="ts">
	import Numbers from './numbers.svelte';
	import Review from './review.svelte';
	import Why from './why.svelte';
</script>

<section>
	<video
		src="https://luxecleaning.ca/wp-content/uploads/2022/01/Hero-Video.mp4"
		autoplay={true}
		class="w-screen"
	>
		<track kind="captions" /></video
	>
	<div class="mt-24 flex justify-center">
		<p class="w-3/4 text-center text-2xl font-light">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
		</p>
	</div>
</section>
<section class="mt-24">
	<Why />
</section>
<section class="mt-40">
	<Review />
</section>
<section class="my-40">
	<Numbers />
</section>
