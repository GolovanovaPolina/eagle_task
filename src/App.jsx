import React, {memo, useRef, useState} from "react";
import FormComponent from "./components/FormComponent.tsx";
import {FC} from "react";
import ThrowComponent from "./components/ThrowComponent";
import PlayWrapperComponent from "./components/PlayWrapperComponent";
import FinishComponent from "./components/FinishComponent";
import {
    setActiveNodeActions,
    setCurrentNutsNumberActions,
    setNutsNumberActions,
    setStepsNumberActions, setDisableLevelsAction
} from "./store/actions";
import {useDispatch} from "react-redux";

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
            <FormComponent onReady={onReady}/>
            {
                start &&
                <>
                    <PlayWrapperComponent/>
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
