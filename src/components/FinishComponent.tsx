import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../store/store";

function FinishComponent({onReload}) {
    const activeNode = useSelector((store: IStore) => store.activeNode);


    return (
        <div className="row">
            <p className="text-center alert alert-light fw-bold ">Ответ: прочность равна {activeNode.name}.</p>
            <Button size="lg" className="my-3 col-4 offset-4" onClick = { onReload }>Обновить!</Button>
        </div>
    );
}

export default FinishComponent;