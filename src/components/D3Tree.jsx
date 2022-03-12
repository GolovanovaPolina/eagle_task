import React from 'react';
import TreeGraph from 'react-d3-tree';
import {FC} from "react";

const orgChart = {
    name: 'CEO',
    children: [
        {
            name: 'Manager',
            children: [
                {
                    name: 'Foreman',
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
                {
                    name: 'Foreman',
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
            ],
        },
    ],
};


interface ID3Tree {
    stepsNumber: number;
    nutsNumber: number;

}

const D3Tree: FC<ID3Tree> = ({stepsNumber , nutsNumber}) => {
    //определяем число уровней для n.
    const levelNumber = 4;

    class Node {
        constructor(leftDepth, depth) {
            this.name = null;
            this.children = [];   // Либо 2 ребёнка, либо 0.
            this.leftDepth = leftDepth;
            this.depth = depth;
        }
    }

    class DataNode {
        constructor(name: number, children: DataNode[]) {
            this.name = name;
            this.children = children;
        }
    }


    class Tree {
        constructor(needLeafs, leftLimit, depth) {
            this.root = new Node(0, 1);
            this.needDepth = depth;
            this.leftLimit = leftLimit;
            this.needLeafs = needLeafs;
            this.leafsNumber = 0;
        }

        build (node = this.root) {
            //console.log(node)
            /* Дошли до конца. Увеличили счётчик листьев. */
            if (node.depth === this.needDepth) {
                node.name = this.leafsNumber;
                this.leafsNumber++;
                return;
            }
            const isLastLevel = node.depth === this.needDepth - 1;

            /* Тупик. Увеличили счётчик листьев. */
            if (node.leftDepth === this.leftLimit) {
                node.name = this.leafsNumber;
                this.leafsNumber++;
                return;
            }
            /* Добавляем 2 узла. */
            if (!isLastLevel || this.leafsNumber < this.needLeafs) {
                /* Левый. */
                node.children.push(new Node(node.leftDepth + 1, node.depth + 1));
                this.build(node.children[0]);
                /* Правый. */
                node.children.push(new Node(node.leftDepth, node.depth + 1));
                this.build(node.children[1]);
                /* Нумерация. */


            }
        }

        getDataChild(node): DataNode[] {
            if (node.children.length === 0) return [];
            const children = [];
            node.children.forEach((child) => children.push(this.prepareToD3(child)));

            return children;
        }

        prepareToD3(node = this.root){
            return new DataNode(node.name, this.getDataChild(node));
        }

    }

    const tree = new Tree(stepsNumber, nutsNumber, levelNumber);
    tree.build();

    const dataTree: DataNode = tree.prepareToD3();
    console.log(dataTree);
    return (
        <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
            <TreeGraph data={dataTree} orientation="vertical" />
        </div>
    );
}

export default D3Tree;

