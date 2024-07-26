import { useQuizContext } from "../QuizProvider";
import React from "react";
function Error() {
  const { errMsg } = useQuizContext();
  return (
    <p className="error">
      <span>💥</span> {errMsg}
    </p>
  );
}

export default Error;
