<script lang="ts">
	import QuestionRectangle from '$lib/components/QuestionRectangle.svelte';
	import type { Question } from '$lib/types.js';
	import QuestionComponent from './QuestionComponent.svelte';

	export let data;
	let questions: Question[] = data.quizQuestions;
	let questionIndex = 0;
	$: currentQuestion = questions[questionIndex];
	let score = 0;
	let gameStatus: 'running' | 'over' = 'running';

	function handleClick(questions: Question[], clickedCorrect: boolean) {
		if (clickedCorrect) {
			score++;
			currentQuestion.status = 'correct';
		} else {
			currentQuestion.status = 'incorrect';
		}
		if (questionIndex < questions.length - 1) {
			questionIndex++;
		} else {
			gameStatus = 'over';
		}
	}
</script>

<main class="max-w-screen-sm mx-auto flex justify-center items-center min-h-full w-full">
	<div class="w-full flex flex-col gap-8">
		{#if gameStatus === 'running'}
			{#key questionIndex}
				<QuestionComponent
					on:answerClick={(event) => {
						handleClick(questions, event.detail.value);
						questions = questions;
					}}
					{questionIndex}
					totalQuestionAmount={questions.length}
					question={currentQuestion}
					target_lang={'de'}
				/>
			{/key}
		{:else}
			<div class="flex flex-col gap-4 justify-center items-center">
				<h2>Game over</h2>
				<p>Score: {score} / {questions.length}</p>
				<a class="btn" href="/">Return to Home screen</a>
			</div>
		{/if}
		<div class="flex justify-between items-center w-full gap-2">
			{#each questions as question (question.text)}
				<QuestionRectangle
					questionStatus={question.status}
					isCurrentQuestion={currentQuestion == question}
				/>
			{/each}
		</div>
	</div>
</main>
