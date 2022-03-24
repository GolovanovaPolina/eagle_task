import egg1 from '../img/egg1.png';
import egg2 from '../img/egg2.png';
import egg3 from '../img/egg3.png';
import {FC} from "react";
import {useSelector} from "react-redux";
import {IStore} from "../store/store";

interface IEggProps {
    img:any;
    bottom: number;
}

const Egg: FC<IEggProps> = ({img, bottom}) => {
    return <img src={img} style={{bottom}} alt="egg" />
}

function EggsContainer() {
    const nutsNum = useSelector((store: IStore) => store.currentNutsNum);
    const pictures = [egg1, egg2, egg3];
    const data = [];

    for (let i = 0; i < nutsNum; i++){
        const egg = {
            img: pictures[i % pictures.length],
            bottom: (i*70) % 500,
        }
        data.push(egg);
    }

    return (
        <div className="play__eggs">
            {data.map((egg, index) => <Egg img={egg.img} bottom={egg.bottom} key={index} />)}
        </div>
    );
}

export default EggsContainer;