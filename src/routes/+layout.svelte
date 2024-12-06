<script lang="ts">
	import Header from '$lib/ui/layout/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<main class="relative">
	<div class="px-12">
		<Header />
		{@render children()}
	</div>
</main>
