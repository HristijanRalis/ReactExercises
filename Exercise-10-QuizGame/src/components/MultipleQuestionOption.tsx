import React from "react";
import type { QuestionType } from "../types";

interface Props {
  question: QuestionType;
  handleMultipleOptionQuestion: (
    question: QuestionType,
    answer: boolean
  ) => void;
}

export const MultipleQuestionOption = ({
  question,
  handleMultipleOptionQuestion,
}: Props) => {
  return (
    <div
      style={{
        ...styles.container,
        ...(question.is_question_answer_correct !== undefined
          ? {
              backgroundColor: question.is_question_answer_correct
                ? "green"
                : "red",
            }
          : {}),
      }}
    >
      <h2>{question.question}</h2>
      <div style={styles.btnContainer}>
        {question.all_answers.map((answer) => {
          return (
            <button
              disabled={question.is_question_answer_correct !== undefined}
              key={answer}
              style={styles.btn}
              onClick={() => {
                handleMultipleOptionQuestion(
                  question,
                  question.correct_answer === answer ? true : false
                );
              }}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};
const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 40px",
    border: "1px solid white",
    gap: "20px",
    marginBlock: "20px",
  },

  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    border: "none",
    padding: "10px",
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
  },
};
