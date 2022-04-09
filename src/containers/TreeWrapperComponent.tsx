// @ts-ignore
import React, {memo, useEffect, useState} from 'react';
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../store/store";
import TreeComponent from "../components/TreeComponent";
import {TTree} from "../utils/TreeTypes";
import {setActiveNodeActions} from "../store/actions";

const TreeWrapperComponent: FC = () => {
    const dispatch = useDispatch();
    const stepsNumber = useSelector((store: IStore) => store.stepsNum);
    const nutsNumber = useSelector((store: IStore) => store.nutsNum);

    const tree = new TTree(stepsNumber, nutsNumber);
    dispatch(setActiveNodeActions(tree.root));

    return (
        <>
            <div id="treeWrapper">
                <TreeComponent tree={tree}/>
            </div>
        </>

    );
}

export default memo(TreeWrapperComponent);

