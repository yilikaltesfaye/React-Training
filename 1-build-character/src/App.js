// import React, { useState } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [height, setHeight] = useState(null);
  const [superpower, setSuperPower] = useState("");
  const [displayCharacter, setDisplayCharacter] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents form from refreshing the page
    setDisplayCharacter(true);
  };

  const handleReset = () => {
    setName("");
    setAge(null);
    setHeight(null);
    setSuperPower("");
    setDisplayCharacter(false);
  };
  return (
    <div className="App">
      <h1>Build a Hero</h1>
      <div className="grid">
        <div>
          <form onSubmit={handleSubmit}>
            <label for="name">Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
            <label for="age">Age : </label>
            <input
              type="number"
              id="age"
              name="age"
              onChange={(event) => {
                setAge(event.target.value);
              }}
              required
            />
            <label for="height">Height ( CM ) : </label>
            <input
              type="number"
              id="height"
              name="height"
              onChange={(event) => {
                setHeight(event.target.value);
              }}
              required
            />
            <label for="superpower">SuperPower : </label>
            <input
              list="superpower"
              placeholder="Choose a SuperPower..."
              onChange={(event) => {
                setSuperPower(event.target.value);
              }}
              required
            />
            <datalist id="superpower">
              <option value="Super Strength" />
              <option value="Flight" />
              <option value="X-Ray Vision" />
              <option value="Telekinesis" />
              <option value="Telepathy" />
              <option value="Magic Manipulation" />
              <option value="Healing Factor" />
              <option value="Energy Projection" />
              <option value="Time Travel" />
              <option value="Shape-shifting" />
              <option value="Mind Control" />
              <option value="Phasing" />
              <option value="Super Speed" />
            </datalist>
            <div className="button">
              <button type="submit">Submit</button>
              <button type="button" onClick={handleReset}>
                Clear
              </button>
            </div>
          </form>
        </div>
        {displayCharacter && (
          <div className="results">
            <p>
              Hero's Name : <span>{name}</span>
            </p>
            <p>
              Hero's Age : <span>{age}</span>
            </p>
            <p>
              Hero's Height : <span>{height}</span>
            </p>
            <p>
              Hero's Superpower : <span>{superpower}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
