import egg1 from '../../img/egg1.png';
import egg2 from '../../img/egg2.png';
import egg3 from '../../img/egg3.png';
import {FC} from "react";

interface IEggProps {
    img:any;
    left: number;
}

const Egg: FC<IEggProps> = ({img, left}) => {
    return <img src={img} style={{left}}/>;
}

function Eggs({nutsNum}) {
    const pictures = [egg1, egg2, egg3];
    const data = [];

    for (let i = 0; i < nutsNum; i++){
        const egg: IEggProps = {
            img: pictures[i % pictures.length],
            left: 200 - (Math.random() * 10 * nutsNum) % 200,
            key: i,
        }
        data.push(egg);
    }

    return (
        <div className="play__eggs">
            {data.map((egg) =>  <Egg {...egg} />)}
        </div>
    );
}

export default Eggs;