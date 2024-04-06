import { useQuizContext } from "../QuizProvider";

function Error() {
  const { errMsg } = useQuizContext();
  return (
    <p className="error">
      <span>💥</span> {errMsg}
    </p>
  );
}

export default Error;
