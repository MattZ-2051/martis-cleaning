<script lang="ts">
	let { frontText, backText }: { frontText: string; backText: string } = $props();
</script>

<div class="card">
	<div class="card-inner">
		<div class="card-front">
			<p>{frontText}</p>
		</div>
		<div class="card-back">
			<p>{backText}</p>
		</div>
	</div>
</div>

<style lang="postcss">
	/* From Uiverse.io by vamsidevendrakumar */
	.card {
		width: 300px;
		height: 200px;
		perspective: 1000px;
	}

	.card-inner {
		width: 100%;
		height: 100%;
		position: relative;
		transform-style: preserve-3d;
		transition: transform 0.999s;
	}

	.card:hover .card-inner {
		transform: rotateY(180deg);
	}

	.card-front,
	.card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
	}

	.card-front {
		@apply border-[5px] border-primary bg-white text-black;
		display: flex;
		align-items: center;
		border-radius: 10px;
		justify-content: center;
		font-size: 24px;
		transform: rotateY(0deg);
	}

	.card-back {
		@apply bg-primary text-white;
		display: flex;
		align-items: center;
		border-radius: 10px;
		justify-content: center;
		font-size: 24px;
		transform: rotateY(180deg);
	}
</style>
