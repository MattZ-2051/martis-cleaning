<script lang="ts">
	const numbers: { value: string; caption: string }[] = [
		{ value: '5', caption: 'Star Reviews' },
		{ value: '500+', caption: 'Visits Per Month' },
		{ value: '30', caption: 'Towns & Cities visited regularly' }
	];
</script>

<div>
	<p class="text-center text-2xl font-light">Numbers were proud of</p>
	<div class="mt-12 grid grid-cols-3">
		{#each numbers as data}
			<div class="flex flex-col items-center justify-center">
				<p class="text-[70px] font-medium">{data.value}</p>
				<p class="text-center font-light">{data.caption}</p>
			</div>
		{/each}
	</div>
</div>
