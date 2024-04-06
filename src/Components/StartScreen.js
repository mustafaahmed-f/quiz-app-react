import { useQuizContext } from "../QuizProvider";

function StartScreen() {
  const { questionsLength, dispatch, questions } = useQuizContext();

  function handleStartQuiz() {
    dispatch({ type: "start" });
  }

  return (
    <div className="start">
      <h2>Welcome to the React Quiz !</h2>
      <h3>{questionsLength} questions to test your react knowledge</h3>
      <h3>
        You can change num. of questions :{" "}
        <select
          value={questionsLength}
          onChange={(e) =>
            dispatch({
              type: "SelectQuestionsNum",
              payload: `${e.target.value}`,
            })
          }
        >
          {Array.from({ length: questions.length }, (_, i) => (
            <option key={i}>{i + 1}</option>
          ))}
        </select>
      </h3>
      <button className="btn btn-ui" onClick={handleStartQuiz}>
        Lets's Start
      </button>
    </div>
  );
}

export default StartScreen;
