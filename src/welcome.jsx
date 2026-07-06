import { useGame } from "./GameContext";

function Welcome() {
  const { startGame } = useGame();

  return (
    <div>
      <h1>Whack a Mole</h1>

      <p>Click the mole to earn points!</p>

      <button onClick={startGame}>
        Play
      </button>
    </div>
  );
}

export default Welcome;