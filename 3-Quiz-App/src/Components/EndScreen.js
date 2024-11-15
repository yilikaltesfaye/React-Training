import { useContext } from "react";
import { GameStateContext } from "../Helpers/Context";
import { Questions } from "../Helpers/Questions";

function EndScreen() {
  const { setGameState, userName, setUserName, score, setScore } =
    useContext(GameStateContext);

  const submitReset = () => {
    setScore(0);
    setUserName("");
    setGameState("Menu");
  };
  const tryAgain = () => {
    setScore(0);
    setGameState("Playing");
  };
  return (
    <div className="endscreen">
      <p>
        <span>{userName}</span>, You Have Finished The Quiz with Score of{" "}
        {score} out of {Questions.length}
      </p>
      {score > Questions.length - 2 ? (
        <div className="play">
          <h1>👍🎉Bravo🎉👍</h1>
        </div>
      ) : (
        <div className="fail">
          <p>You need a little more practice.</p>
          <button className="button" onClick={tryAgain}>
            Try Again
          </button>
        </div>
      )}
      <button className="button" onClick={submitReset}>
        for a New Person
      </button>
    </div>
  );
}

export default EndScreen;
