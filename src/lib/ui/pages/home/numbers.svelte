<script lang="ts">
	import { numbersData } from '../../data/pages';
</script>

<div>
	<p class="text-center text-2xl font-light">Numbers were proud of</p>
	<div class="mt-12 grid grid-cols-3">
		{#each numbersData as data}
			<div class="flex flex-col items-center justify-center">
				<p class="text-[70px] font-medium">{data.value}</p>
				<p class="text-center font-light">{data.caption}</p>
			</div>
		{/each}
	</div>
</div>
