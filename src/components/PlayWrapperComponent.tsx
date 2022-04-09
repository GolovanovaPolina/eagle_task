import BarComponent from "./BarComponent";
import TreeContainer from "../containers/TreeWrapperComponent";
import EggsComponent from "./EggsComponent";

function PlayWrapperComponent() {
    return (
        <div className="play__wrapper">
            <EggsComponent />
            <BarComponent />
            <TreeContainer />
        </div>
    );
}

export default PlayWrapperComponent;