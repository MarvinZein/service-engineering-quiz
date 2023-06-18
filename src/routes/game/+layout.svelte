<script>
	import LanguageIcon from '$lib/components/LanguageIcon.svelte';
	import { translationToggle } from '$lib/stores';
	import { writable } from 'svelte/store';
</script>

<main class="min-h-screen w-full grid grid-rows-[auto_1fr] items-start">
	<nav class="p-2 flex justify-between items-center bg-base-300">
		<a href="/" class="btn btn-ghost">HOME</a>
		<label class="label cursor-pointer w-fit flex gap-2">
			<span class="label-text"><LanguageIcon /></span>
			<input type="checkbox" class="toggle" bind:checked={$translationToggle} />
		</label>
	</nav>
	<div class="px-4">
		<slot />
	</div>
</main>
