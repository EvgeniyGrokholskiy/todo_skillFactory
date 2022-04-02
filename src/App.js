import './App.css';
import Board from "./component/board/board";
import state from "./component/state/state";
import WithRequired from "./component/hoc/hoc";
import RenderProps from "./component/renderprops/renderprops";

function App() {
  return (
    <>
      <Board state={state}/>
       {/* <WithRequired/>
        <RenderProps/>*/}
    </>
  );
}

export default App;
