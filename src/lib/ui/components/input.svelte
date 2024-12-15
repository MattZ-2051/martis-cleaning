<script lang="ts">
	let { label }: { label: string } = $props();
</script>

<label for={label} class="block text-sm/6 font-semibold text-black">{label}</label>
<input
	type="text"
	name={label}
	id={label}
	class="block w-full rounded-md bg-white px-3.5 py-2 text-black outline-none outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-gray-400 focus:outline-none focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
/>
