import React from "react";
import type { QuestionType } from "../types";

interface Props {
  question: QuestionType;
  handleSingleOptionQuestion: (question: QuestionType, answer: boolean) => void;
}

export const SingleOption = ({
  question,
  handleSingleOptionQuestion,
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
        <button
          disabled={question.is_question_answer_correct !== undefined}
          style={styles.btn}
          onClick={() => {
            handleSingleOptionQuestion(
              question,
              question.correct_answer === "True" ? true : false
            );
          }}
        >
          True
        </button>
        <button
          disabled={question.is_question_answer_correct !== undefined}
          style={styles.btn}
          onClick={() => {
            handleSingleOptionQuestion(
              question,
              question.correct_answer === "False" ? true : false
            );
          }}
        >
          False
        </button>
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
