import type { QuestionType } from "./types";

export const mapInitialQuestion = (questions: QuestionType[]): QuestionType[] => {
  return questions.map((q) => {
    return {
      ...q,
      all_answers: [...q.incorrect_answers, q.correct_answer].sort(
        () => Math.random() - 0.5
      ),
    };
  });
};