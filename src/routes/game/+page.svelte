<script lang="ts">
	import type { Question } from '$lib/types.js';
	import { onMount } from 'svelte';

	export let data;
	let questions: Question[] = data.quizQuestions;
	const fragenKuerzel = ['A', 'B', 'C', 'D'];
	let questionIndex = 0;
	$: currentQuestion = questions[questionIndex];
	let score = 0;

	onMount(() => {
		questionIndex = 0;
		score = 0;
	});

	let gameStatus: 'running' | 'over' = 'running';

	function handleClick(index: number) {
		if (currentQuestion.answers[index].isCorrect) {
			score++;
			currentQuestion.status = 'correct';
		} else {
			currentQuestion.status = 'incorrect';
		}

		questions = questions;

		if (questionIndex < questions.length - 1) {
			questionIndex++;
		} else {
			gameStatus = 'over';
		}
	}
</script>

<main class="max-w-screen-sm mx-auto flex justify-center items-center h-full w-full">
	<div class="w-full flex flex-col gap-8">
		{#if gameStatus === 'running'}
			<h2 class="font-bold text-xl">
				Question {questionIndex + 1} of {questions.length} ({currentQuestion.difficulty})
			</h2>
			<p>{currentQuestion.text}</p>
			<div class="flex flex-col gap-4 w-full">
				<!-- Die Sortierfunktion dient gleichzeitig zum Mischen der Fragen, sodass die richtige Frage nicht immer an der gleichen Stelle steht -->
				{#each currentQuestion.answers.sort( (a, b) => a.text.localeCompare(b.text) ) as answer, index}
					<button
						on:click={() => handleClick(index)}
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
							{answer.text}
						</div>
					</button>
				{/each}
			</div>
		{:else}
			<h2>Game over</h2>
		{/if}
		<div class="flex gap-2 justify-between items-center w-full">
			{#each questions as question}
				<svg viewBox="0 0 10 10" class="w-6 h-6">
					<rect
						width="10"
						height="10"
						class="stroke-neutral"
						class:stroke-primary={currentQuestion === question && gameStatus === 'running'}
						class:fill-base-300={question.status === 'unanswered'}
						class:fill-success={question.status === 'correct'}
						class:fill-error={question.status === 'incorrect'}
					/>
				</svg>
			{/each}
		</div>
	</div>
</main>
