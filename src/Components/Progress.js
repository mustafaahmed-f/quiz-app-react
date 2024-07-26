import { useQuizContext } from "../QuizProvider";
import React from "react";
function Progress() {
  const { index, questionsLength, totalPoints, points, answer } =
    useQuizContext();
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={questionsLength}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{questionsLength}
      </p>
      <p>
        <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
}

export default Progress;
