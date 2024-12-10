<script lang="ts">
	import { reviewData } from '../data/pages';
</script>

<div class="justfy-center flex items-center gap-4">
	{#each reviewData as data}
		<div
			class="group relative h-[500px] w-full transform overflow-hidden rounded-xl border border-tertiary bg-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-lg"
		>
			<div
				class="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-30"
			></div>
			<div class="relative z-10 p-6">
				<p class="text-xl font-semibold">{data.title}</p>
				<p class="text-xl font-semibold">{data.name}</p>
				<p class="mt-2">
					{data.description}
				</p>
				<img src={data.img} class="h-40 w-40 rounded-full" alt="" />
			</div>
		</div>
	{/each}
</div>
