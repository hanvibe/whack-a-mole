import { useGame } from "./GameContext";

function Hole({ index }) {
  const { moleHole, whackMole } = useGame();

  const hasMole = index === moleHole;

  return (
    <div className="hole" onClick={hasMole ? whackMole : undefined}>
      {hasMole && <div className="mole"></div>}
    </div>
  );
}

export default Hole;