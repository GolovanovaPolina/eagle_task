import {useState} from "react";

export class TD3Node {
    name: number | null;
    children: TD3Node[];
    constructor(name: number, children: TD3Node[]) {
        this.name = name;
        this.children = children;
    }
}

export class TNode {
    name: number | null;
    children: TNode[];
    leftDepth: number;
    depth: number;

    constructor(leftDepth, depth) {
        this.name = null;
        this.children = [];   // Либо 2 ребёнка, либо 0.
        this.leftDepth = leftDepth;
        this.depth = depth;
    }

    isEqual(nodeDatum: TD3Node) {
        if (!TD3Node) return false;
        if (this.name === nodeDatum.name){
            if (!this.children.length) {
                if (!nodeDatum.children.length) return true;
                else return false;
            }
            if (!nodeDatum.children.length) {
                if (!this.children.length) return true;
                else return false;
            }

            if (+nodeDatum.children[0].name === +this.children[0].name && +nodeDatum.children[1].name === +this.children[1].name)
            {
                return true;
            }

            return false;
        }
    }

    isLeaf(){
        return !this.children.length;
    }
}


export class TTree {
    root: TNode;
    needDepth: number;
    leftLimit: number;
    needLeafs: number;
    leafsNumber: number;

    constructor(needLeafs, leftLimit, depth) {
        this.root = new TNode(0, 1);
        this.needDepth = depth;
        this.leftLimit = leftLimit;
        this.needLeafs = needLeafs;
        this.leafsNumber = 0;
        this.build();
    }

    build (node = this.root) {
        //console.log(node)
        /* Дошли до конца. Увеличили счётчик листьев. */
        if (node.depth === this.needDepth) {
            node.name = this.leafsNumber;
            this.leafsNumber++;
            return node.name;
        }
        const isLastLevel = node.depth === this.needDepth - 1;

        /* Тупик. Увеличили счётчик листьев. */
        if (node.leftDepth === this.leftLimit) {
            node.name = this.leafsNumber;
            this.leafsNumber++;
            return node.name;
        }
        /* Добавляем 2 узла. */
        if (!isLastLevel || this.leafsNumber < this.needLeafs) {
            /* Левый. */
            node.children.push(new TNode(node.leftDepth + 1, node.depth + 1));
            const l = this.build(node.children[0]);
            /* Правый. */
            node.children.push(new TNode(node.leftDepth, node.depth + 1));
            const r = this.build(node.children[1]);
            /* Нумерация такая же, как в самом левом листе правого поддерева. */
            node.name = r;
            return l;
        }
    }

    getDataChild(node): TD3Node[] {
        if (node.children.length === 0) return [];
        const children = [];
        node.children.forEach((child) => children.push(this.prepareToD3(child)));
        return children;
    }

    prepareToD3(node = this.root){
        return new TD3Node(node.name,  this.getDataChild(node));
    }

}