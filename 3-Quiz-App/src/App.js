import { useState } from "react";
import { GameStateContext } from "./Helpers/Context";
import Menu from "./Components/Menu";
import Play from "./Components/Play";
import "./App.css";
import EndScreen from "./Components/EndScreen";

function App() {
  const [gameState, setGameState] = useState("Menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className="window">
        <GameStateContext.Provider
          value={{
            gameState,
            setGameState,
            userName,
            setUserName,
            score,
            setScore,
          }}
        >
          {gameState === "Menu" && <Menu />}
          {gameState === "Playing" && <Play />}
          {gameState === "GameDone" && <EndScreen />}
        </GameStateContext.Provider>
      </div>
    </div>
  );
}

export default App;
