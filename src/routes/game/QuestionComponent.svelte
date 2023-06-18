<script lang="ts">
	import { translationToggle } from '$lib/stores';
	import type { Answer, Question } from '$lib/types';
	import { createEventDispatcher, onMount } from 'svelte';

	export let question: Question;
	export let totalQuestionAmount: number;
	export let target_lang: string;
	export let questionIndex: number;
	const fragenKuerzel = ['A', 'B', 'C', 'D'];

	async function addTranslation(question: Question, target_lang: string) {
		let text = `${question.text}`;
		for (const answer of question.answers) {
			text = text.concat(`\n${answer.text}`);
		}
		const encodedText = encodeURIComponent(text);
		const res = await fetch(`/api/translate/${target_lang}/${encodedText}`, { method: 'POST' });
		const resData = await res.json();
		const parsed: string[] = resData.translatedText.split('\n');
		question.textTranslation = parsed[0];
		for (let i = 0; i < 4; i++) {
			question.answers[i].translation = parsed[i + 1];
		}
		return question;
	}

	onMount(async () => {
		question = await addTranslation(question, target_lang);
		console.log(question);
	});

	const dispatch = createEventDispatcher();
	function handleClick(answer: Answer) {
		dispatch('answerClick', { value: answer.isCorrect });
	}
</script>

<h2 class="font-bold text-xl text-center mt-4">
	{questionIndex + 1} / {totalQuestionAmount}
</h2>
<p class="text-lg font-bold">{$translationToggle ? question.textTranslation : question.text}</p>

<div class="flex flex-col gap-2 w-full">
	<!-- Die Sortierfunktion dient gleichzeitig zum Mischen der Fragen, sodass die richtige Frage nicht immer an der gleichen Stelle steht -->
	{#each question.answers.sort((a, b) => a.text.localeCompare(b.text)) as answer, index}
		<button
			on:click={() => handleClick(answer)}
			class="px-0 w-full min-w-full h-full grid grid-cols-[3rem_1fr] place-items-center"
		>
			<div
				class="font-bold text-xl bg-neutral text-neutral-content min-h-full rounded-l py-2 min-w-full flex justify-center items-center"
			>
				{fragenKuerzel[index]}
			</div>
			<div
				class="font-normal bg-primary w-full h-full flex justify-center items-center text-primary-content rounded-r p-2"
			>
				{#if $translationToggle}
					{#if answer.translation === undefined}
						<span class="loading loading-dots loading-xs" />
					{:else}
						{answer.translation}
					{/if}
				{:else}
					{answer.text}
				{/if}
			</div>
		</button>
	{/each}
</div>
