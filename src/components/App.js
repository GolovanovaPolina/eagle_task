
import '../App.css';
import {useState} from "react";
import Ladder from "./Ladder";
import Data from "./Data";
import Eggs from "./Eggs";
import D3Tree from "./D3Tree";


function App() {
  const [stepsNumber, SetStepsNumber] = useState(0);
  const [nutsNumber, SetNutsNumber] = useState(0);
  const [show, setShow] = useState(false);
  const onClickHandlerSteps = (e) => {
    SetStepsNumber(Number(e.target.value));
  }
  const onClickHandlerNuts = (e) => {
    SetNutsNumber(Number(e.target.value));
  }

  const height = stepsNumber*20 + 100;

  return (
    <div className="App">
      <Data onClickHandlerSteps={onClickHandlerSteps} onClickHandlerNuts={onClickHandlerNuts} nutsNumber={nutsNumber} stepsNumber={stepsNumber} setShow={setShow}/>
      <div style={{display: "flex", justifyContent: "center", height, alignItems: "end"}}>
        {show && <Eggs stepsNum = {stepsNumber} nutsNum = {nutsNumber} />  }
        {show && <Ladder stepsNum = {stepsNumber} nutsNum = {nutsNumber} />  }
      </div>
      {show && <D3Tree stepsNum = {stepsNumber} nutsNum = {nutsNumber}/>}
    </div>
  );
}

export default App;
