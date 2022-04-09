import {FC, useLayoutEffect, useRef, useState} from "react";
import {Button, Form, FormLabel} from "react-bootstrap";
// @ts-ignore
import {
    setActiveNodeActions,
    decreaseCurrentNutsNumberActions,
    addDisableLevelsAction,
    setCurrentNutsNumberActions, setNutsNumberActions, setStepsNumberActions
} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import CheckComponent from "./CheckComponent.tsx";
// @ts-ignore
import {IStore} from "../store/store.tsx";

interface IThrowComponentProps {
    onFinish: () => void;
}

const ThrowComponent: FC<IThrowComponentProps> = ({onFinish}) => {
    const dispatch = useDispatch();
    const activeNode = useSelector((store: IStore) => store.activeNode);
    const stepsNumber = useSelector((store: IStore) => store.stepsNum);

    const [fail, setFail] = useState(true);

    const playRef = useRef(null);
    useLayoutEffect(() => {playRef.current.scrollIntoView()} , []);

    const onThrow = (e) => {
        const fail = e.target.value === "true";
        setFail(fail);
    }

    const onProceed = () => {
        const steps = Array.from(Array(stepsNumber+1).keys());

        if (fail) {
            if (activeNode.children[0].isLeaf()) {
                onFinish();
            }
            dispatch(addDisableLevelsAction(steps.slice(activeNode.name)));
            dispatch(decreaseCurrentNutsNumberActions(1));
            dispatch(setActiveNodeActions(activeNode.children[0]));
        }
        else {
            if (activeNode.children[1].isLeaf()) {
                onFinish();
            }
            dispatch(addDisableLevelsAction(steps.slice(0, activeNode.name)));
            dispatch(setActiveNodeActions(activeNode.children[1]));
        }
    }

    return (
        <Form>
            <Form.Group>
                <div ref={playRef} className="text-center">
                    <FormLabel className="px-5">Бросок со ступени №{activeNode.name}. Яйцо разбилось?</FormLabel>
                    <CheckComponent checkedValue={fail}   onCheckHandler={onThrow}/>
                    <Button size="lg" className="my-3 col-4 d-block offset-4" onClick ={onProceed}>Продолжить!</Button>
                </div>

            </Form.Group>

        </Form>

    )}

export default ThrowComponent;
