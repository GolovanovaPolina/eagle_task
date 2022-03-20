import {useSelector} from "react-redux";
import {IStore} from "../../store/store";

const  Step = ({level, offset, size}) => {
    const activeNode = useSelector((state: IStore)=> state.activeNode);
    const disableLevels = useSelector((state: IStore) => state.disableLevels);

    const color = (activeNode && activeNode.name === level) ? "red": (activeNode && disableLevels.includes(level)) ? "grey" : "none";
    return <div className="play__step" style={{left: offset, bottom: offset, width: size, height:size, background: color}}>
        {level}
    </div>
}

export default Step;