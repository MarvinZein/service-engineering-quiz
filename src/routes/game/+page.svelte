<script lang="ts">
	import ArrowIcon from '$lib/components/ArrowIcon.svelte';
	import HomeIcon from '$lib/components/HomeIcon.svelte';
	import QuestionRectangle from '$lib/components/QuestionRectangle.svelte';
	import { selectedLanguage } from '$lib/stores';
	import type { GameStatus, Question } from '$lib/types.js';
	import QuestionComponent from './QuestionComponent.svelte';

	export let data;
	let questions: Question[] = data.quizQuestions;
	let questionIndex = 0;
	$: currentQuestion = questions[questionIndex];
	let score = 0;
	let gameStatus: GameStatus = 'running';
	let questionIsAnswered: boolean = false;

	function handleClick(questions: Question[], clickedCorrect: boolean) {
		if (clickedCorrect) {
			currentQuestion.status = 'correct';
			score++;
		} else {
			currentQuestion.status = 'incorrect';
		}
		questionIsAnswered = true;
	}

	function handleNextClick() {
		if (questionIndex < questions.length - 1) {
			questionIndex++;
			questionIsAnswered = false;
		} else {
			gameStatus = 'over';
		}
	}
</script>

<main class="max-w-screen-sm mx-auto flex justify-center items-center min-h-full w-full">
	<div class="w-full flex flex-col">
		{#if gameStatus === 'running'}
			{#key questionIndex}
				<QuestionComponent
					on:answerClick={(event) => {
						handleClick(questions, event.detail.value);
						questions = questions;
					}}
					question={currentQuestion}
					target_lang={$selectedLanguage.languageCode}
				/>
			{/key}
		{:else}
			<div class="flex flex-col gap-4 justify-center items-center my-5">
				<h2 class="font-bold">
					<span class="text-success">
						{score}
					</span>
					/ {questions.length}
				</h2>
				<a class="btn" href="/">
					<HomeIcon />
				</a>
			</div>
		{/if}
		<div class="flex justify-evenly items-center w-full gap-2 h-12">
			{#each questions as question (question.text)}
				<QuestionRectangle
					{gameStatus}
					questionStatus={question.status}
					isCurrentQuestion={currentQuestion == question}
				/>
			{/each}
		</div>
		<button
			on:click={() => handleNextClick()}
			disabled={!questionIsAnswered}
			class:hidden={gameStatus === 'over'}
			class="btn btn-secondary w-full mt-8"
		>
			<ArrowIcon />
		</button>
	</div>
</main>
