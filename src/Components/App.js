import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Final from "./Final";
import Progress from "./Progress";
import Next from "./Next";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../useQuiz";
import { useContext } from "react";
import { useQuizContext } from "../QuizProvider";

////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// APP Function //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

function App() {
  const { status, answer } = useQuizContext();

  /////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "Error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "startQuiz" && <Progress />}
        {status === "startQuiz" && <Question />}

        <Footer>
          {status === "startQuiz" && <Timer />}
          {answer !== null && status === "startQuiz" && <Next />}
        </Footer>

        {status === "Finished" && <Final />}
      </Main>
    </div>
  );
}

export default App;
