import Step from "./Step";

function Ladder({stepsNum}) {

    const steps = Array.from(Array(stepsNum).keys());
    const height = stepsNum * 30 + 100;

        return (
        <div className="play__ladder" style={{height}}>
            {steps.map((step) => <Step level={++step} key={++step}/>)}
        </div>
    );
}

export default Ladder;