import React, { useContext } from "react";
import { PauseContext } from "../context/paused"

function Controls({ increment, decrement, like, togglePaused }) {
  const [paused, setPaused] = useContext(PauseContext)

  function togglePaused(){
    setPaused(paused => !paused)
  }
  
  return (
    <div>
      <button onClick={decrement} disabled={paused}>
        <span role="img" aria-label="minus">
          ➖
        </span>
      </button>
      <button onClick={increment} disabled={paused}>
        <span role="img" aria-label="plus">
          ➕
        </span>
      </button>
      <button onClick={like} disabled={paused}>
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
      <button onClick={togglePaused}>
        <span role="img" aria-label={paused ? "play" : "pause"}>
          {paused ? "▶️" : "⏸"}
        </span>
      </button>
    </div>
  );
}

export default Controls;
