// @ts-ignore
import React, {FC} from "react";
import TreeGraph from "react-d3-tree";
// @ts-ignore
import {TTree} from "../../utils/TreeTypes.ts";
import {useSelector} from "react-redux";
import {IStore} from "../../store/store";

interface ITreeComponent {
    tree: TTree;
}

const TreeComponent:FC<ITreeComponent> = () => {
    const activeNode = useSelector((store:IStore) => store.activeNode);

    const renderRectSvgNode = ({ nodeDatum, toggleNode }) => {
        const color = activeNode.isEqual(nodeDatum) ? "red" : "grey";
        return (
            <g>
                <rect width="30" height="30" x="-15" fill={color} onClick={toggleNode} />
                <text fill="black" strokeWidth="1" x="20">
                    {nodeDatum.name}
                </text>
            </g>
        );
    }


    return (
        // @ts-ignore
        <TreeGraph data={tree.prepareToD3()} orientation="vertical" renderCustomNodeElement={renderRectSvgNode} />
    )
};
export default TreeComponent