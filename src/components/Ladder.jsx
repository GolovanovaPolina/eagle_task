import Step from "./Step";

function Ladder({stepsNum}) {
    const ladder = [];
    for (let i = 0; i < stepsNum; i++){
        ladder.push(<Step level={i} key={i}/>);
    }

    return (
        <div className="Ladder" style={{position: "relative", background: "white"}}>
            {ladder}
        </div>
    );
}

export default Ladder;