export interface Question {
  text: string;
  answers: Answer[];
  difficulty: Difficulty;
  status: 'unanswered' | 'correct' | 'incorrect';
}

export interface Answer {
  text: string,
  isCorrect: boolean
}

export type Difficulty = 'easy' | 'medium' | 'hard'

export interface Language {
  englishName: string;
  name: string;
  isoCode: string;
  flag: string;
}