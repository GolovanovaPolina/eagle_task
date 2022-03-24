import BarContainer from "./BarContainer";
import TreeContainer from "./TreeContainer";
import EggsContainer from "./EggsContainer";
import {useLayoutEffect, useRef} from "react";

function PlayContainer() {
    return (
        <div className="play__wrapper">
            <EggsContainer />
            <BarContainer />
            <TreeContainer />
        </div>
    );
}

export default PlayContainer;