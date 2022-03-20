import {FC, useState} from "react";
import {Button, Form, FormLabel} from "react-bootstrap";
// @ts-ignore
import {setActiveNodeActions, setCurrentNutsNumberActions, setDisableLevelsAction} from "../../store/actions.tsx";
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import CheckComponent from "./CheckComponent.tsx";
// @ts-ignore
import {IStore} from "../../store/store.tsx";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";

/*interface IThrowContainerProps {
    onStep: () => void;
}*/

const ThrowComponent: FC = () => {
    const dispatch = useDispatch();
    const activeNode = useSelector((store: IStore) => store.activeNode);
    const nutsNumber = useSelector((store: IStore) => store.nutsNum);
    const stepsNumber = useSelector((store: IStore) => store.stepsNum);

    const [fail, setFail] = useState(true);
    const [finish, setFinish] = useState(false);

    const steps = Array.from(Array(stepsNumber).keys());

    const onThrow = (e) => {
        const fail = e.target.value === "true";
        setFail(fail);
    }

    const onProceed = () => {
        if (fail) {
            if (activeNode.children[0].isLeaf()){
                setFinish(true);
            }
            dispatch(setDisableLevelsAction(steps.slice(activeNode.name)));
            dispatch(setCurrentNutsNumberActions(nutsNumber - 1));
            dispatch(setActiveNodeActions(activeNode.children[0]));
        }
        else {
            if (activeNode.children[1].isLeaf()) {
                setFinish(true);
            }
            console.log(steps.slice(0, activeNode));
            dispatch(setDisableLevelsAction(steps.slice(0, activeNode)));
            dispatch(setCurrentNutsNumberActions(nutsNumber));
            dispatch(setActiveNodeActions(activeNode.children[1]));
        }
    }

    return (
        <Form>
            <Form.Group>
                { !finish &&
                    <div className="text-center">
                        <FormLabel className="px-5">Бросок со ступени №{activeNode.name}. Орех разбился?</FormLabel>
                        <CheckComponent checkedValue={fail}   onCheckHandler={onThrow}/>
                        <Button size="lg" className="my-3 col-4 d-block offset-4" onClick = {onProceed}>Продолжить!</Button>
                    </div>
                }
                {finish && <p>Прочность равна ...</p>}
            </Form.Group>

        </Form>

    )}

export default ThrowComponent;
