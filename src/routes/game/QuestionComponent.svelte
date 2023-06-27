<script lang="ts">
	import ArrowIcon from '$lib/components/ArrowIcon.svelte';
	import { translationToggle } from '$lib/stores';
	import type { Answer, Question } from '$lib/types';
	import { createEventDispatcher, onMount } from 'svelte';

	export let question: Question;
	// export let totalQuestionAmount: number;
	export let target_lang: string;
	// export let questionIndex: number;
	const fragenKuerzel = ['A', 'B', 'C', 'D'];

	async function addTranslation(question: Question, target_lang: string) {
		let text = `${question.text}`;
		for (const answer of question.answers) {
			text = text.concat(`\n${answer.text}`);
		}
		const encodedText = encodeURIComponent(text);
		const res = await fetch(`/api/translate/${target_lang}/${encodedText}`, { method: 'POST' });
		const resData = await res.json();
		const parsed: string[] = resData.translatedText!.split('\n');
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

	function delay(ms: number) {
		return new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	}

	let selectedAnswer: Answer | null = null;
	let selectedAnswerIsCorrect: boolean | null = null;
	const dispatch = createEventDispatcher();

	async function handleAnswerClick(answer: Answer) {
		await delay(500);
		selectedAnswerIsCorrect = answer.isCorrect;
		dispatch('answerClick', { value: answer.isCorrect });
	}
</script>

<div class="mb-12">
	<h2 class="text-lg mb-12">
		{#if question.textTranslation}
			{$translationToggle ? question.textTranslation : question.text}
		{:else}
			<span class="loading loading-dots loading-xs" />
		{/if}
	</h2>

	<div class="flex flex-col gap-2 w-full">
		<!-- Die Sortierfunktion dient gleichzeitig zum Mischen der Fragen, sodass die richtige Frage nicht immer an der gleichen Stelle steht -->
		{#each question.answers.sort((a, b) => a.text.localeCompare(b.text)) as answer, index}
			<button
				class:bg-warning={selectedAnswer === answer && selectedAnswerIsCorrect === null}
				class:!bg-success={selectedAnswerIsCorrect != null && answer.isCorrect}
				class:!bg-error={selectedAnswer === answer && selectedAnswerIsCorrect === false}
				disabled={selectedAnswer != null}
				on:click={() => {
					selectedAnswer = answer;
					handleAnswerClick(answer);
				}}
				class="bg-neutral text-neutral-content px-0 w-full min-w-full h-full grid grid-cols-[3rem_1fr] place-items-center gap-1 rounded-l-lg"
			>
				<div
					class="bg-base-300 text-base-content font-bold text-xl min-h-full rounded-l py-2 min-w-full flex justify-center items-center"
				>
					{fragenKuerzel[index]}
				</div>
				<div class="font-normal w-full h-full flex justify-center items-center rounded-r p-2">
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
</div>

<style lang="postcss">
	button {
		@apply hover:ring-4 hover:ring-warning;
	}
</style>
