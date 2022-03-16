import {FC, useState} from "react";
import {Button, Form} from "react-bootstrap";
// @ts-ignore
import {setActiveNodeActions, setCurrentNutsNumberActions} from "../../store/actions.tsx";
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import CheckComponent from "./CheckComponent.tsx";
// @ts-ignore
import {IStore} from "../../store/store.tsx";

interface IThrowContainerProps {
    onStep: () => void;
}

const ThrowComponent: FC<IThrowContainerProps> = () => {
    const dispatch = useDispatch();
    const activeNode = useSelector((store: IStore) => store.activeNode);
    const nutsNumber = useSelector((store: IStore) => store.nutsNum);

    const [fail, setFail] = useState(true);

    const onThrow = (e) => {
        const fail = e.target.value === "true";
        setFail(fail);
    }

    const onProceed = () => {
        if (fail) {
            dispatch(setCurrentNutsNumberActions(nutsNumber - 1));
            dispatch(setActiveNodeActions(activeNode.children[0]));
        }
        else {
            dispatch(setCurrentNutsNumberActions(nutsNumber));
            dispatch(setActiveNodeActions(activeNode.children[1]));
        }
    }

    console.log(activeNode);

    return (
        <Form>
            <Form.Group className="form__group">
                <Form.Label>Бросок со ступени №{activeNode.name}. Орех разбился?</Form.Label>
                <CheckComponent checkedValue={fail}   onCheckHandler={onThrow}/>
                <Button onClick = {onProceed}>Продолжить!</Button>
            </Form.Group>

        </Form>

    )}

export default ThrowComponent;
