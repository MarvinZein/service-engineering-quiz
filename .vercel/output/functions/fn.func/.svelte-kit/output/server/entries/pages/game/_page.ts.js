async function load({ fetch }) {
  const questionsPerDifficulty = 2;
  const difficulties = ["easy", "medium", "hard"];
  let theTriviaApiRes = [];
  for (const difficulty of difficulties) {
    const questionResponse = await fetch(`https://the-trivia-api.com/v2/questions?limit=${questionsPerDifficulty}&difficulty=${difficulty}`);
    const questionData = await questionResponse.json();
    theTriviaApiRes = [...theTriviaApiRes, questionData];
  }
  let quizQuestions = [];
  for (let diff = 0; diff < 3; diff++) {
    for (let i = 0; i < questionsPerDifficulty; i++) {
      const q = theTriviaApiRes[diff][i];
      let questionText = q.question.text;
      let answers = [];
      for (const incorrectAnswer of q.incorrectAnswers) {
        answers.push({ text: incorrectAnswer, isCorrect: false });
      }
      answers.push({ text: q.correctAnswer, isCorrect: true });
      quizQuestions.push({ text: questionText, textTranslation: "", answers, difficulty: difficulties[diff], status: "unanswered" });
    }
  }
  return {
    quizQuestions
  };
}
export {
  load
};
