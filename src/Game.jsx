import { useGame } from "./GameContext";
import Hole from "./Hole";

function Game() {
  const { score, restartGame } = useGame();

  return (
    <div>
      <h1>Whack a Mole</h1>

      <p>Score: {score}</p>

      <button onClick={restartGame}>Restart</button>

      <div className="board">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
          <Hole key={number} index={number} />
        ))}
      </div>
    </div>
  );
}

export default Game;