import { createContext, useContext } from "react";
import { useQuiz } from "./useQuiz";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [
    {
      questions,
      status,
      errorMsg,
      index,
      answer,
      points,
      highScore,
      totalSeconds,
      selectedQuestions,
      questionsLength,
      totalPoints,
    },
    dispatch,
  ] = useQuiz();

  //   console.log("Provider renders");

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        errorMsg,
        index,
        answer,
        points,
        highScore,
        totalSeconds,
        selectedQuestions,
        dispatch,
        questionsLength,
        totalPoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuizContext() {
  const context = useContext(QuizContext);
  if (!context) throw new Error("Context can only used inside provider !");
  return context;
}
