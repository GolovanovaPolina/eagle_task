// @ts-ignore
import React, {FC} from "react";
import TreeGraph from "react-d3-tree";
import {TTree} from "../utils/TreeTypes";
import {useSelector} from "react-redux";
import {IStore} from "../store/store";

interface ITreeComponent {
    tree: TTree;
}

const TreeComponent:FC<ITreeComponent> = ({tree}) => {
    const activeNode = useSelector((store:IStore) => store.activeNode);

    const renderRectSvgNode = ({ nodeDatum, toggleNode }) => {
        const color = activeNode.isEqual(nodeDatum) ? "#c41e3a" : "#808080";
        return (
            <g>
                <rect width="30" height="30" x="-15" fill={color} onClick={toggleNode} />
                <text fill="black" strokeWidth="1" x="20">
                    {nodeDatum.name}
                </text>
            </g>
        );
    }

    const xTranslate = 740 / 2;
    const yTranslate = 10;

    return (
        // @ts-ignore
        <TreeGraph data={tree.prepareToD3()} orientation="vertical" renderCustomNodeElement={renderRectSvgNode} zoom={0.5} translate={{x: xTranslate, y: yTranslate}} />
    )
};
export default TreeComponent