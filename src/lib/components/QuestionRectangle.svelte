<script lang="ts">
	export let isCurrentQuestion = false;
	export let questionStatus: 'unanswered' | 'correct' | 'incorrect';

	let bg = 'bg-neutral';
	$: {
		if (isCurrentQuestion) {
			bg = 'bg-primary';
		} else bg = 'bg-neutral';
		if (questionStatus == 'correct') bg = 'bg-success';
		else if (questionStatus == 'incorrect') bg = 'bg-error';
	}
</script>

<div class="w-full aspect-square {bg} " />
