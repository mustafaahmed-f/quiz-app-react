import { useQuizContext } from "../QuizProvider";

function Final() {
  const { points, totalPoints, dispatch, highScore } = useQuizContext();
  let percentage = (points / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {totalPoints} with a
        percentage {percentage.toFixed(2)} %
      </p>

      <p className="highscore">Highest Score : {highScore}</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Restart" })}
      >
        Retry
      </button>
    </>
  );
}

export default Final;
