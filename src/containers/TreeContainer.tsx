// @ts-ignore
import React, {memo, useEffect, useState} from 'react';
import {FC} from "react";
import {useSelector} from "react-redux";
import {IStore} from "../store/store";
// @ts-ignore
import ThrowComponent from "../components/TreeComponents/ThrowComponent.tsx";
import {Modal} from "react-bootstrap";
// @ts-ignore
import TreeComponent from "../components/TreeComponents/TreeComponent.tsx";
import {TTree} from "../utils/TreeTypes.tsx";

const TreeContainer: FC = () => {
    const stepsNumber = useSelector((store: IStore) => store.stepsNum);
    const nutsNumber = useSelector((store: IStore) => store.nutsNum);
    const activeNode = useSelector((store:IStore) => store.activeNode)
    const [finish, setFinish] = useState(false);

    const onStep = () => {
        if (activeNode.isLeaf()) setFinish(true);
    }


    function getLevelNumber() {
        return 4;
    }
    //определяем число уровней для n.
    const levelNumber = getLevelNumber();
    const tree = new TTree(stepsNumber, nutsNumber, levelNumber);

    return (
        <>
            <div id="treeWrapper"  style={{ width: '50em', height: '20em' }}>
                <ThrowComponent onStep={onStep} />
                {/* @ts-ignore */}
                <TreeComponent tree={tree}/>
                {/*{finish && <Modal> Прочность яиц: </Modal>}*/}
            </div>
        </>

    );
}

export default memo(TreeContainer);

