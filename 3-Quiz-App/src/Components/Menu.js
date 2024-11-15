import { useContext, useState } from "react";
import { GameStateContext } from "../Helpers/Context";
function Menu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);
  const [nameInput, setNameInput] = useState(""); // State for input field value

  const submitHandle = (event) => {
    event.preventDefault();
    setGameState("Playing");
    setUserName(nameInput);
  };
  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        placeholder="Your Name Here"
        value={nameInput}
        onChange={(event) => setNameInput(event.target.value)}
      />
      <button className="button" type="submit">
        Start Quiz
      </button>
    </form>
  );
}

export default Menu;
