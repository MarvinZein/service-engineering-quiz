<script lang="ts">
	import type { GameStatus } from '$lib/types';

	export let isCurrentQuestion = false;
	export let questionStatus: 'unanswered' | 'correct' | 'incorrect';
	export let gameStatus: GameStatus;

	let bg = 'bg-base-300';
	$: {
		if (questionStatus == 'unanswered') {
			bg = 'bg-neutral';
		} else if (questionStatus == 'correct') bg = 'bg-success';
		else if (questionStatus == 'incorrect') bg = 'bg-error';
	}
</script>

<div
	class:blinking={isCurrentQuestion && questionStatus == 'unanswered' && gameStatus === 'running'}
	class="w-full aspect-square {bg}"
/>

<style lang="postcss">
	.blinking {
		animation: blinker 4s linear infinite;
	}

	@keyframes blinker {
		100% {
			@apply bg-base-300;
		}
	}
</style>
