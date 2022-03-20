import Step from "./Step";

function Ladder({stepsNum}) {
    const getOffset = (stepsNum, level) => {
        const multiplier = (1/stepsNum) * 100;
        return (multiplier*level).toString() + "%";
    }
    const getSize = (stepsNum) => {
        return ((1/stepsNum) * 100).toString() + "%";
    }

    const height = stepsNum * 30;
    const size = getSize(stepsNum);

    const steps = Array.from(Array(stepsNum).keys());

        return (
        <div className="play__ladder" style={{height}}>
            {steps.map((step) => {
                const offset = getOffset(stepsNum, step);
                step++;
                return <Step level={step} offset={offset} size={size} key={++step}/>;
            })
            }
        </div>
    );
}

export default Ladder;