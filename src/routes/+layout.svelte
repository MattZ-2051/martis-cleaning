<script lang="ts">
	import Footer from '$lib/ui/layout/footer.svelte';
	import Header from '$lib/ui/layout/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<main class="relative">
	<Header />
	<div class="h-full px-12">
		{@render children()}
	</div>
	<Footer />
</main>
