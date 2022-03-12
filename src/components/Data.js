const Data = ({onClickHandlerNuts, onClickHandlerSteps, stepsNumber, nutsNumber, setShow}) => {
    return (
        <>
            <div className="Data">
                <div>
                    <label>Введите число ступеней: </label>
                    <input onChange={onClickHandlerSteps} value={stepsNumber}/>
                </div>

                <div>
                    <label>Введите число яиц: </label>
                    <input onChange={onClickHandlerNuts} value={nutsNumber}/>
                </div>

            </div>
            <button onClick={(e) => setShow(true)}>Готово!</button>
        </>

    )}

export default Data;