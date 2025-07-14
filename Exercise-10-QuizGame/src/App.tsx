import { useEffect, useState } from "react";

import "./App.css";
import { dataFromBEMock, type QuestionType, type Response } from "./types";
import { SingleOption } from "./components/SingleOption";
import { MultipleQuestionOption } from "./components/MultipleQuestionOption";
import { mapInitialQuestion } from "./utils";

function App() {
  const [questions, setQuestions] = useState<QuestionType[]>(
    mapInitialQuestion(dataFromBEMock.results)
  );
  const [correctAnswer, setCorrectanswer] = useState([]);
  const [incorectAnswer, setInCorrectanswer] = useState([]);
  console.log(questions);

  const answeredAnswers = questions.filter(
    (q) => q.is_question_answer_correct !== undefined
  ).length;

  const unAnsweredAnswers = questions.filter(
    (q) => q.is_question_answer_correct === undefined
  ).length;

  const correctAnswers = questions.filter(
    (q) => q.is_question_answer_correct === true
  ).length;
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((data: Response) => {
        const mappedResponse = mapInitialQuestion(data.results);
        setQuestions(mappedResponse);
      });
  }, []);

  useEffect(() => {
    if (unAnsweredAnswers === 0) {
      setTimeout(() => {
        fetch("https://opentdb.com/api.php?amount=10")
          .then((res) => res.json())
          .then((data: Response) => {
            const mappedResponse = mapInitialQuestion(data.results);
            setQuestions(mappedResponse);
          });
      }, 2000);
    }
  }, [unAnsweredAnswers]);
  const handleSingleOptionQuestion = (
    question: QuestionType,
    answer: boolean
  ) => {
    const updatedQuestions = questions.map((q) => {
      if (q.question === question.question) {
        return {
          ...q,
          is_question_answer_correct: answer,
        };
      }
      return q;
    });

    setQuestions(updatedQuestions);
  };

  const handleMultipleOptionQuestion = (
    question: QuestionType,
    answer: boolean
  ) => {
    const updatedQuestions = questions.map((q) => {
      if (q.question === question.question) {
        return {
          ...q,
          is_question_answer_correct: answer,
        };
      }
      return q;
    });

    setQuestions(updatedQuestions);
  };

  return (
    <>
      <h2>
        Answered questions:
        {answeredAnswers}
      </h2>
      <h2>Unanswered questions: {unAnsweredAnswers}</h2>
      <h2>Correct questions: {correctAnswers}</h2>

      <h1>Questions</h1>
      {questions.map((question) => {
        if (question.type === "boolean") {
          return (
            <SingleOption
              key={question.question}
              question={question}
              handleSingleOptionQuestion={handleSingleOptionQuestion}
            />
          );
        }
        if (question.type === "multiple") {
          return (
            <MultipleQuestionOption
              key={question.question}
              question={question}
              handleMultipleOptionQuestion={handleMultipleOptionQuestion}
            />
          );
        }
        return null;
      })}
    </>
  );
}

export default App;
