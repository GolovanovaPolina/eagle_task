import {Form} from "react-bootstrap";
import {ChangeEvent, FC} from "react";

interface ICheckComponent {
    checkedValue: boolean;
    onCheckHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckComponent: FC<ICheckComponent> = ({checkedValue, onCheckHandler}) => {
    return (
        <>
            <Form.Check
                inline
                label="Да!"
                checked={checkedValue}
                type="radio"
                value="true"
                onChange={onCheckHandler}

            />
            <Form.Check
                inline
                label="Нет!"
                checked={!checkedValue}
                type="radio"
                value="false"
                onChange={onCheckHandler}
            />
        </>

    );
}
export default CheckComponent