import egg1 from '../img/egg1.png';
import egg2 from '../img/egg1.png';
import egg3 from '../img/egg1.png';

function Eggs({nutsNum, stepsNum}) {
    const pictures = [egg1, egg2, egg3]
    const elements = [];
    for (let i = 0; i < nutsNum; i++){
        elements.push(<img src={pictures[i % 3]} height={50}/>);
    }

    return (
        <div className="Eggs" style={{position: "relative"}}>
            {elements}
        </div>
    );
}

export default Eggs;