import {ChangeEvent} from "react";
import {FC} from "react";

interface IData {
    onClickHandlerNuts: (e: ChangeEvent<HTMLInputElement>) => void;
    onClickHandlerSteps: (e: ChangeEvent<HTMLInputElement>) => void;
    onReady: (ChangeEvent) => void;
}

const Data: FC<IData> = ({onClickHandlerNuts, onClickHandlerSteps, onReady}) => {
    return (
        <>
            <div className="Data">
                <div>
                    <label>Введите число ступеней: </label>
                    <input onChange={onClickHandlerSteps}/>
                </div>

                <div>
                    <label>Введите число яиц: </label>
                    <input onChange={onClickHandlerNuts}/>
                </div>

            </div>
            <button onClick={onReady}>Готово!</button>
        </>

    )}

export default Data;