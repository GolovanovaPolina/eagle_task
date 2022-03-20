import EggsContainer from "../components/LadderComponents/EggsContainer.jsx"
import Ladder from "../components/LadderComponents/Ladder.jsx"
import {FC} from "react";
import {useSelector} from "react-redux";
import {IStore} from "../store/store";

const LadderContainer: FC = () => {
    const stepsNumber = useSelector((store: IStore) => store.stepsNum);
    const currentNutsNumber = useSelector((store: IStore) => store.currentNutsNum);

    return (
        <>
            {/*<Eggs nutsNum = {currentNutsNumber} />*/}
            {/*<Ladder stepsNum = {stepsNumber} />*/}
        </>
)}

export default LadderContainer;