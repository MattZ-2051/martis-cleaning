<script lang="ts">
	import ChevronLeft from '../icons/chevronLeft.svelte';
</script>

<div class="justfy-center flex items-center gap-4">
	<ChevronLeft iconSize={60} />
	<div
		class="group relative h-[500px] w-3/4 transform overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:scale-105 hover:shadow-lg"
	>
		<div
			class="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-30"
		></div>
		<div class="relative z-10 p-6">
			<p class="text-xl font-semibold text-gray-800">Classic Blue Jeans</p>
			<p class="mt-2 text-gray-600">
				Our classic blue jeans are a timeless addition to your wardrobe. Crafted from premium denim,
				they offer both style and comfort. Perfect for any casual occasion.
			</p>
			<div class="mt-4 flex items-center text-gray-600">
				<svg
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 fill-current text-yellow-500"
				>
					<path d="M0 0h24v24H0z" fill="none"></path>
					<path
						d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
					></path>
				</svg>
				<span class="ml-2">4.8 (24 reviews)</span>
			</div>
		</div>
	</div>
</div>
