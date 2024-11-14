// import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Build a Hero</h1>
      <div className="grid">
        <div className="form">
          <label for="name">Name : </label>
          <input type="text" id="name" name="name" />
          <label for="age">Age : </label>
          <input type="number" id="age" name="age" />
          <label for="height">Height ( CM ) : </label>
          <input type="number" min={100} id="height" name="height" />
          <label for="power">Power : </label>
          <input list="power" placeholder="Choose a Power..." />
          <datalist id="power">
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
        </div>
        <div className="results">results</div>
      </div>
    </div>
  );
}

export default App;
