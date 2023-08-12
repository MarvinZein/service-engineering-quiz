import type { Answer, Difficulty, Question } from '$lib/types.js';

interface TriviaResponse {
  category: string,
  id: string,
  correctAnswer: string,
  incorrectAnswers: string[],
  question: {
    text: string
  },
  tags: string[],
  type: string,
  difficulty: string,
  regions: string[],
  isNiche: boolean,
}

export async function load({ fetch }) {
  const questionsPerDifficulty = 1;
  const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];

  // Map each difficulty to a fetch request and store them in an array of promises
  const fetchPromises = difficulties.map(difficulty =>
    fetch(`https://the-trivia-api.com/v2/questions?limit=${questionsPerDifficulty}&difficulty=${difficulty}`).then(res => res.json())
  );

  // Use Promise.all() to execute all the fetch requests concurrently
  const theTriviaApiRes: TriviaResponse[][] = await Promise.all(fetchPromises);


  let quizQuestions: Question[] = [];
  for (let diff = 0; diff < 3; diff++) {
    for (let i = 0; i < questionsPerDifficulty; i++) {
      const q: TriviaResponse = theTriviaApiRes[diff][i];
      let questionText = q.question.text;
      let answers: Answer[] = []
      for (const incorrectAnswer of q.incorrectAnswers) {
        answers.push({ text: incorrectAnswer, isCorrect: false })
      }
      answers.push({ text: q.correctAnswer, isCorrect: true });
      quizQuestions.push({ text: questionText, textTranslation: '', answers: answers, difficulty: difficulties[diff], status: 'unanswered' })
    }
  }

  return {
    quizQuestions: quizQuestions
  }
};