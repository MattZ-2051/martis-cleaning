<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(async () => {
		if ($page.status === 404) {
			await goto('/home');
		}
	});
</script>

<h1>{$page.status}: {$page?.error?.message}</h1>
