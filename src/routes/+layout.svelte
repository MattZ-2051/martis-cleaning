<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="px-6 py-2">
	{@render children()}
</main>
