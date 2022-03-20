// @ts-ignore
import React, {memo, useEffect, useState} from 'react';
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../store/store";
import ThrowComponent from "../components/TreeComponents/ThrowComponent";
import {Modal} from "react-bootstrap";
import TreeComponent from "../components/TreeComponents/TreeComponent";
import {TTree} from "../utils/TreeTypes";
import {setActiveNodeActions} from "../store/actions";

const TreeContainer: FC = () => {
    const dispatch = useDispatch();
    const stepsNumber = useSelector((store: IStore) => store.stepsNum);
    const nutsNumber = useSelector((store: IStore) => store.nutsNum);

    function getLevelNumber() {
        return 4;
    }
    //определяем число уровней для n.
    const levelNumber = getLevelNumber();
    const height = levelNumber * 85;

    const tree = new TTree(stepsNumber, nutsNumber, levelNumber);
    dispatch(setActiveNodeActions(tree.root));

    return (
        <>
            <div id="treeWrapper"  style={{height}}>
                <TreeComponent tree={tree}/>
            </div>
        </>

    );
}

export default memo(TreeContainer);

