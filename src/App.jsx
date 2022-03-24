import React, {memo, useRef, useState} from "react";
import FormContainer from "./containers/FormContainer.tsx";
import {FC} from "react";
import ThrowComponent from "./components/TreeComponents/ThrowComponent";
import PlayContainer from "./containers/PlayContainer";
import FinishComponent from "./components/TreeComponents/FinishComponent";
import {
    setActiveNodeActions,
    setCurrentNutsNumberActions,
    addDisableLevelsAction,
    setNutsNumberActions,
    setStepsNumberActions, setDisableLevelsAction
} from "./store/actions";
import {useDispatch} from "react-redux";
import {getElement} from "bootstrap/js/src/util";

const App: FC = () => {
    const [start, setStart] = useState(false);
    const [finish, setFinish] = useState(false);

    const dispatch = useDispatch();

    const onReady = () => {
        setStart(true);
    }

    function onFinish() {
        setFinish(true);
    }

    function onReload() {
        setStart(false);
        setFinish(false);

        dispatch(setDisableLevelsAction([]));
        dispatch(setCurrentNutsNumberActions(0));
        dispatch(setStepsNumberActions(0));
        dispatch(setNutsNumberActions(0));
        dispatch(setActiveNodeActions(null));

        document.getElementById("input-steps").value = "";
        document.getElementById("input-nuts").value = "";
    }

    return (
        <div className="container">
            <FormContainer onReady={onReady}/>
            {
                start &&
                <>
                    <PlayContainer/>
                    {!finish && <ThrowComponent onFinish={onFinish} />}
                </>
            }
            {
                finish && <FinishComponent onReload={onReload}/>
            }
        </div>
    );
}

export default memo(App);
