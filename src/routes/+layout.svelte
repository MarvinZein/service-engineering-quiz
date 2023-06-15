<script lang="ts">
	import '../app.postcss';
	import { selectedLanguage } from '$lib/stores';

	// ISO 639-1 codes
	const langToISOCode: Map<string, string> = new Map<string, string>();
	langToISOCode.set('Deutsch', 'de');
	langToISOCode.set('English', 'en');
	langToISOCode.set('Български', 'bg');
</script>

<div class="h-screen relative">
	<nav class="navbar bg-base-100 h-[10%]">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">Quiz</a>
		</div>
		<div class="flex-none">
			<select bind:value={$selectedLanguage} class="select w-full max-w-xsd">
				{#each [...langToISOCode] as [lang, code]}
					<option value={code}>{lang}</option>
				{/each}
			</select>
		</div>
	</nav>

	<div
		class="px-4 max-w-screen-md flex justify-center items-center mx-auto w-full h-[90%] relative"
	>
		<slot />
	</div>
</div>
