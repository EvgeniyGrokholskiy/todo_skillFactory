import './App.css';
import Board from "./component/board/board";
import state from "./component/state/state";

function App() {
  return (
    <>
      <Board state={state}/>
    </>
  );
}

export default App;
