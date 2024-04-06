import { useQuizContext } from "../QuizProvider";

function Next() {
  const { dispatch, answer, questionsLength, index } = useQuizContext();

  return (
    <div>
      {answer !== null ? (
        index < questionsLength - 1 ? (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "Next" })}
          >
            Next
          </button>
        ) : (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "Finish" })}
          >
            Finish
          </button>
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default Next;
