import { useGame } from "./GameContext";
import Welcome from "./Welcome";
import Game from "./Game";

function App() {
  const { started } = useGame();

  return (
    <>
      {started ? <Game /> : <Welcome />}
    </>
  );
}

export default App;
