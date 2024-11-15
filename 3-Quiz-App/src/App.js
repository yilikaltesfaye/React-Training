import { useState } from "react";
import { GameStateContext } from "./Helpers/Context";
import Menu from "./Components/Menu";
import Play from "./Components/Play";
import "./App.css";

function App() {
  const [gameState, setGameState] = useState("Menu");
  const [userName, setUserName] = useState("");
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className="window">
        <GameStateContext.Provider
          value={{ gameState, setGameState, userName, setUserName }}
        >
          {gameState === "Menu" && <Menu />}
          {gameState === "Playing" && <Play />}
        </GameStateContext.Provider>
      </div>
    </div>
  );
}

export default App;
