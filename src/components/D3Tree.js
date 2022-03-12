import React from 'react';
import TreeGraph from 'react-d3-tree';

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


function D3Tree(stepsNumber , nutsNumber) {
    //определяем число уровней для n.
    const levelNumber = 5;

    class Node {
        constructor(leftDepth, depth) {
            this.name = null;
            this.children = [];   // Либо 2 ребёнка, либо 0.
            this.leftDepth = leftDepth;
            this.depth = depth;
        }
    }

    class Tree {
        constructor(n, k, levels) {
            this.root = new Node(0);
            this.needDepth = levels;
            this.leftLimit = k;
            this.needLeafs = n;
            this.leafsNumber = 1;
        }

        addLevel (node = this.root) {
            if (node.depth === this.needDepth) return;
            const isLastLevel = node.depth === this.needDepth - 1;

            /* Добавлять в эту ветвь нельзя! */
            if (node.leftDepth === this.leftLimit) return;
            /* Добавляем 2 узла. */
            if (!isLastLevel || this.leafsNumber < this.needLeafs) {
                node.children.push(new Node(node.leftDepth + 1, node.depth + 1)); // Левый.
                node.children.push(new Node(node.leftDepth, node.depth + 1)); // Правый.
                this.leafsNumber += 1;
            }
        }

        insert(data) {
            let newNode = new Node(data);
            if (this.root === null) {
                this.root = newNode;
            } else {
                this.insertNode(this.root, newNode);
            }
        }
        insertNode(node, newNode) {
            if (newNode.data < node.data) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    this.insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this.insertNode(node.right, newNode);
                }
            }
        }

    }

    return (
        <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
            <TreeGraph data={orgChart} orientation="vertical" />
        </div>
    );
}

export default D3Tree;

