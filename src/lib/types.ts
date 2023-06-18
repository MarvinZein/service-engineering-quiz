export interface Question {
  text: string;
  textTranslation: string,
  answers: Answer[];
  difficulty: Difficulty;
  status: 'unanswered' | 'correct' | 'incorrect';
}

export interface Answer {
  text: string,
  translation: string,
  isCorrect: boolean
}

export type Difficulty = 'easy' | 'medium' | 'hard'

export interface Language {
  englishName: string;
  name: string;
  languageCode: string;
  flag: string;
  startTranslation: string;
  countryCode: string;
}