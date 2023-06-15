import type { Answer, Difficulty, Question } from '$lib/types.js';

export const load = async ({ fetch }) => {
  const numberOfQuestions = 5;

  let data = [];
  const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];
  for (const difficulty of difficulties) {
    const questionResponse = await fetch(`https://the-trivia-api.com/v2/questions?limit=${numberOfQuestions}&difficulty=${difficulty}`);
    data.push(await questionResponse.json())
  }

  let quizQuestions: Question[] = [];
  for (let diff = 0; diff < 3; diff++) {
    for (let i = 0; i < numberOfQuestions; i++) {
      const q = data[diff][i];

      let answers: Answer[] = []
      for (const incorrectAnswer of q.incorrectAnswers) {
        answers.push({ text: incorrectAnswer, isCorrect: false })
      }
      answers.push({ text: q.correctAnswer, isCorrect: true });

      quizQuestions.push({ text: q.question.text, answers: answers, difficulty: difficulties[diff], status: 'unanswered' })
    }
  }

  return {
    quizQuestions: quizQuestions,
  }
};