import { useQuizContext } from "../QuizProvider";

function Question() {
  const { dispatch, answer, questions, index } = useQuizContext();
  const currentQuestion = questions[index];
  //   console.log(currentQuestion);
  return (
    <>
      <div>
        <h4>{currentQuestion.question}</h4>

        <div className="options">
          {currentQuestion.options.map((option, i) => (
            <button
              disabled={answer !== null}
              className={`btn btn-option ${answer === i ? "answer" : ""} ${
                answer !== null
                  ? currentQuestion.correctOption === i
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              key={option}
              onClick={() => dispatch({ type: "Answer", payload: i })}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Question;
