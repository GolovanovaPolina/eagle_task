import {ChangeEvent } from "react";
import {FC} from "react";
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import {
    setCurrentNutsNumberActions,
    setNutsNumberActions,
    setStepsNumberActions
} from "../store/actions";
import {IStore} from "../store/store";

interface IFormContainerProps {
    onReady: (ChangeEvent) => void;
}

const FormComponent: FC<IFormContainerProps> = ({onReady}) => {
    const dispatch = useDispatch();

    const onClickHandlerSteps = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStepsNumberActions(Number(e.target.value)));
    }
    const onClickHandlerNuts = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setNutsNumberActions(Number(e.target.value)));
        dispatch(setCurrentNutsNumberActions(Number(e.target.value)));
    }

    return (
        <Form>
                <Form.Group className="form__group">
                    <Form.Label>Введите число ступеней: </Form.Label>
                    <Form.Control id="input-steps" type="text" onChange={onClickHandlerSteps}/>
                </Form.Group>

                <Form.Group className="form__group">
                    <Form.Label>Введите число яиц: </Form.Label>
                    <Form.Control id="input-nuts" type="text" onChange={onClickHandlerNuts}/>
                </Form.Group>

            <Button size="lg" className="my-3 offset-4 col-4 " onClick={onReady}>Старт!</Button>
        </Form>

    )}

export default FormComponent;