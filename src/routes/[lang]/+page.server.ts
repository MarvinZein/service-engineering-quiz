import { env } from '$env/dynamic/private';
import type { Answer, Difficulty, Question } from '$lib/types.js';
import * as deepl from 'deepl-node'

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

export const load = async ({ fetch, params }) => {
  const questionsPerDifficulty = 5;
  const options = { maxRetries: 20, minTimeout: 10000 };
  const translator = new deepl.Translator(env.DEEPL_KEY, options);
  const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];

  // Fetch the untranslated Questions (5 easy, 5 medium, 5 hard)
  let rawQuestions: TriviaResponse[][] = [];
  for (const difficulty of difficulties) {
    const questionResponse = await fetch(`https://the-trivia-api.com/v2/questions?limit=${questionsPerDifficulty}&difficulty=${difficulty}`);
    const data = await questionResponse.json()
    rawQuestions = [...rawQuestions, data];
  }

  let quizQuestions: Question[] = [];
  for (let diff = 0; diff < 3; diff++) {
    for (let i = 0; i < questionsPerDifficulty; i++) {
      const q: TriviaResponse = rawQuestions[diff][i];

      let questionText = q.question.text;
      let answers: Answer[] = []
      for (const incorrectAnswer of q.incorrectAnswers) {
        answers.push({ text: incorrectAnswer, isCorrect: false })
      }
      answers.push({ text: q.correctAnswer, isCorrect: true });


      const translated: deepl.TextResult[] = await translator.translateText([questionText, ...answers.map(x => x.text)], 'en', params.lang.toLowerCase() as deepl.TargetLanguageCode);

      questionText = translated[0].text;
      for (let i = 0; i < 3; i++) {
        answers[i].text = translated[i + 1].text;
      }

      quizQuestions.push({ text: questionText, answers: answers, difficulty: difficulties[diff], status: 'unanswered' })

    }
  }

  return {
    quizQuestions: quizQuestions,
  }
};