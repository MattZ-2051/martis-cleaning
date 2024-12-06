<script lang="ts">
	import Card from '$lib/ui/components/card.svelte';

	const whyData: { frontText: string; backText: string }[] = [
		{
			frontText: 'Qualified Experts',
			backText: 'asdfasdf'
		},
		{
			frontText: 'Workmanship Quality',
			backText: 'asdfasdf'
		},
		{
			frontText: 'Quality Professionals',
			backText: 'asdfasdf'
		},
		{
			frontText: 'Flexible Schedule',
			backText: 'asdfasdf'
		},
		{
			frontText: 'Affordable Package',
			backText: 'asdfasdf'
		},
		{
			frontText: 'Special Offer',
			backText: 'asdfasdf'
		}
	];
</script>

<div class="flex h-[60vh] w-full flex-col items-center">
	<p class="text-3xl">Why choose us</p>
	<div class="mt-12 grid grid-cols-3 gap-12">
		{#each whyData as data}
			<Card frontText={data.frontText} backText={data.backText} />
		{/each}
	</div>
</div>
