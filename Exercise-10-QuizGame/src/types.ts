export interface QuestionType {
  type: "boolean" | "multiple";
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  is_question_answer_correct?: boolean;
  all_answers: Array<string>;
}

export interface Response {
  response_code: number;
  results: QuestionType[];
}

export const dataFromBEMock = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Politics",
      question: "The largest consumer market in 2015 was...",
      correct_answer: "The United States of America",
      incorrect_answers: ["Germany", "Japan", "United Kingdom"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Board Games",
      question:
        "What do you declare in Rīchi Mahjong when you&#039;ve drawn your winning tile?",
      correct_answer: "Tsumo",
      incorrect_answers: ["Ron", "Rīchi", "Kan"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Music",
      question:
        "In which city did American rap producer DJ Khaled originate from?",
      correct_answer: "Miami",
      incorrect_answers: ["New York", "Detroit", "Atlanta"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Books",
      question:
        "In Rudyard Kipling&#039;s &quot;The Jungle Book&quot;, what type of snake was Kaa?",
      correct_answer: "Python",
      incorrect_answers: ["Cobra", "Anaconda", "Viper"],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "History",
      question:
        "Theodore Roosevelt Jr. was the only General involved in the initial assault on D-Day.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "How many states are in Australia?",
      correct_answer: "6",
      incorrect_answers: ["7", "8", "5"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "History",
      question: "How long did World War II last?",
      correct_answer: "6 years",
      incorrect_answers: ["4 years", "5 years", "7 years"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "History",
      question: "Which Nazi General was known as the &quot;Desert Fox&quot;?",
      correct_answer: "Erwin Rommel",
      incorrect_answers: [
        "Gerd von Rundstadt",
        "Wilhelm Keitel",
        "Heinz Guderian ",
      ],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: "The protagonist of Dead Rising 3 is called Chuck Greene.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "History",
      question:
        "When was the &quot;Siege of Leningrad&quot; lifted during World War II?",
      correct_answer: "January 1944",
      incorrect_answers: ["September 1943", "November 1943", "March 1944"],
    },
  ],
};
