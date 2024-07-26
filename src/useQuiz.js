import { useEffect, useReducer } from "react";

let initialState = {
  questions: [],
  selectedQuestions: null,
  status: "loading",
  errorMsg: "",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  totalSeconds: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
        errorMsg: "",
      };

    case "ErrorCatched":
      return { ...state, status: "Error", errorMsg: action.payload };

    case "SelectQuestionsNum":
      return {
        ...state,
        selectedQuestions: state.questions.slice(0, action.payload),
      };

    case "start": {
      const ENUM = 20;
      return {
        ...state,
        status: "startQuiz",
        totalSeconds:
          state.selectedQuestions === null
            ? state.questions.length * ENUM
            : state.selectedQuestions.length * ENUM,
      };
    }

    case "Answer": {
      const currentQ = state.questions[state.index];
      const isCorrect = currentQ.correctOption === action.payload;
      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + currentQ.points : state.points,
      };
    }

    case "Next":
      return {
        ...state,
        answer: null,
        index: state.index + 1,
      };

    case "Finish":
      return {
        ...state,
        answer: null,
        index: 0,
        status: "Finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case "Restart":
      return {
        ...initialState,
        highScore: state.highScore,
        status: "ready",
        questions: state.questions,
      };

    case "Second":
      return {
        ...state,
        totalSeconds: state.totalSeconds - 1,
        status: state.totalSeconds === 0 ? "Finished" : state.status,
        answer: state.totalSeconds === 0 ? null : state.answer,
        highScore:
          state.totalSeconds === 0
            ? state.points > state.highScore
              ? state.points
              : state.highScore
            : state.highScore,
      };

    default:
      throw new Error("Unknown action type !");
  }
}

export function useQuiz() {
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
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const questionsLength =
    selectedQuestions === null ? questions.length : selectedQuestions.length;
  const questionsForPointsCalc =
    selectedQuestions === null ? questions : selectedQuestions;
  const totalPoints = questionsForPointsCalc.reduce(
    (prev, current) => prev + current.points,
    0
  );

  useEffect(function () {
    fetch(`http://localhost:8000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((err) => dispatch({ type: "ErrorCatched", payload: err.message }));
  }, []);

  return [
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
  ];
}
