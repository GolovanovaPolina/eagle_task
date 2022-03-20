import React, {memo, useState} from "react";
import FormContainer from "./containers/FormContainer.tsx";
import TreeContainer from "./containers/TreeContainer.tsx";
import {FC} from "react";
import LadderContainer from "./containers/LadderContainer.tsx";
import ThrowComponent from "./components/TreeComponents/ThrowComponent";
import BarContainer from "./containers/BarContainer";
import EggsContainer from "./components/LadderComponents/EggsContainer";
import {useSelector} from "react-redux";
import {IStore} from "./store/store";

const App: FC = () => {
    const [start, setStart] = useState(false);

    const onReady = () => {
        setStart(true);
    }

    return (
        <div className="container">
            <FormContainer onReady={onReady}/>
            {
                start &&
                <>
                    <div className="play__wrapper">
                        <div className="play__left-column">
                            <EggsContainer />
                            <BarContainer />
                        </div>
                    </div>

                    <TreeContainer />
                    <ThrowComponent />
                </>
            }



        </div>
    );
}

export default memo(App);
