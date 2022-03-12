
import '../App.css';
import {useState} from "react";
import Ladder from "./Ladder";
import Data from "./Data";
import Eggs from "./Eggs";
import D3Tree from "./D3Tree";
import {ChangeEvent} from "react";
import {FC} from "react";


const App: FC = () => {
  const [stepsNumber, SetStepsNumber] : number = useState(0);
  const [nutsNumber, SetNutsNumber] : number = useState(0);
  const [show, setShow] = useState(false);
  const onClickHandlerSteps = (e: ChangeEvent<HTMLInputElement>) => {
    SetStepsNumber(Number(e.target.value));
  }
  const onClickHandlerNuts = (e: ChangeEvent<HTMLInputElement>) => {
    SetNutsNumber(Number(e.target.value));
  }
  const onReady = () => {
    setShow(true);
  }

  return (
    <div className="App">
      <Data onClickHandlerSteps={onClickHandlerSteps} onClickHandlerNuts={onClickHandlerNuts} onReady={onReady}/>
      <div style={{display: "flex", justifyContent: "center", alignItems: "end"}}>
        {/*{show && <Eggs stepsNum = {stepsNumber} nutsNum = {nutsNumber} />  }*/}
       {/* {show && <Ladder stepsNum = {stepsNumber} />  }*/}
      </div>
      {show && <D3Tree stepsNumber={stepsNumber} nutsNumber={nutsNumber}/>}
    </div>
  );
}

export default App;
