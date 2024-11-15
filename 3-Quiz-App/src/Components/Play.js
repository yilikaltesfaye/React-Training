import { useContext, useState } from "react";
import { GameStateContext } from "../Helpers/Context";
import { Questions } from "../Helpers/Questions";

function Play() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { setGameState, score, setScore } = useContext(GameStateContext);

  const choseOption = (option) => {
    setOptionChosen(option);
  };
  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setOptionChosen("");
  };
  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("GameDone");
  };
  return (
    <div className="Play">
      <p>
        {[currentQuestion + 1]}. {Questions[currentQuestion].prompt}
      </p>
      <div className="Questions">
        <button
          onClick={() => {
            choseOption("optionA");
          }}
          className="button"
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            choseOption("optionB");
          }}
          className="button"
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            choseOption("optionC");
          }}
          className="button"
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            choseOption("optionD");
          }}
          className="button"
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} className="button">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} className="button">
          Next Option
        </button>
      )}
    </div>
  );
}

export default Play;
