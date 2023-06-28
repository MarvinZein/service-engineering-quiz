<script lang="ts">
	import { goto } from '$app/navigation';
	import LanguageIcon from '$lib/components/LanguageIcon.svelte';
	import { langs, selectedLanguage } from '$lib/stores.js';
	import type { Language } from '$lib/types';

	let selected = langs[3];
	$: {
		$selectedLanguage = selected;
	}
	export let data;
	console.log(data);
</script>

<div class="flex justify-center items-center h-full">
	<main class="flex gap-8 flex-col">
		<h1 class="text-center text-4xl font-bold">Quiz-App</h1>
		<div class="grid grid-cols-[auto_1fr] justify-center items-center gap-2">
			<LanguageIcon />
			<select bind:value={selected} class="select select-ghost w-full max-w-xsd">
				{#each langs as lang}
					<option class="cursor-pointer" value={lang}>{lang.flag} {lang.name}</option>
				{/each}
			</select>
		</div>

		<a href="/game" class="btn btn-primary">
			{selected.startTranslation}
		</a>
	</main>
</div>
