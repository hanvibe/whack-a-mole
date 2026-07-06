import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [moleHole, setMoleHole] = useState(0);

  function startGame() {
    setStarted(true);
    setScore(0);
    setMoleHole(Math.floor(Math.random() * 9));
  }

  function restartGame() {
    setStarted(false);
    setScore(0);
    setMoleHole(0);
  }

  function whackMole() {
    setScore((currentScore) => currentScore + 1);
    setMoleHole(Math.floor(Math.random() * 9));
  }

  return (
    <GameContext.Provider
      value={{ started, score, moleHole, startGame, restartGame, whackMole }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}