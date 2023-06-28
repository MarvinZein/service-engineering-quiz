<script>
	import HomeIcon from '$lib/components/HomeIcon.svelte';
	import LanguageIcon from '$lib/components/LanguageIcon.svelte';
	import { translationToggle } from '$lib/stores';
	import { writable } from 'svelte/store';
</script>

<nav class="p-2 flex justify-between items-center bg-base-300 h-[3rem]">
	<a href="/" class="btn btn-ghost">
		<HomeIcon />
	</a>
	<label class="label cursor-pointer w-fit flex gap-2">
		<span class="label-text"><LanguageIcon /></span>
		<input type="checkbox" class="toggle" bind:checked={$translationToggle} />
	</label>
</nav>
<div class="min-h-[calc(100vh-3rem)] flex justify-center items-center p-4">
	<slot />
</div>
