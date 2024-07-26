import { useEffect } from "react";
import { useQuizContext } from "../QuizProvider";
import React from "react";
function Timer() {
  const { dispatch, totalSeconds } = useQuizContext();
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  useEffect(
    function () {
      let id = setInterval(() => {
        dispatch({ type: "Second" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {minutes < 10 ? "0" : ""}
      {minutes}:{seconds < 10 ? "0" : ""}
      {seconds}
    </div>
  );
}

export default Timer;
