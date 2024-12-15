<script lang="ts">
	let { label }: { label: string } = $props();
</script>

<button
	type="submit"
	class="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
	>{label}</button
>
