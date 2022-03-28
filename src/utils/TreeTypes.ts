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
    allFilled: boolean; // Признак того, что среди потомков есть последний узел.

    constructor(leftDepth, depth) {
        this.name = null;
        this.children = [];   // Либо 2 ребёнка, либо 0.
        this.leftDepth = leftDepth;
        this.depth = depth;
        this.allFilled = false;
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
    maxLeafNumber: number;
    leafsNumber: number;

    constructor(stepsNumber, nutsNumber) {
        this.root = new TNode(0, 1);
        this.needDepth = this.getLevelNumber(stepsNumber, nutsNumber);
        this.leftLimit = nutsNumber;
        this.maxLeafNumber = stepsNumber;
        this.leafsNumber = 0;
        this.build();
    }

    /* Получаем высоту дерева. */
    getLevelNumber(stepsNumber, nutsNumber) {
        const k = Math.min(stepsNumber, nutsNumber);
        const n = stepsNumber;
        let h = 0;

        if (k === 0) return 0;
        if (k === 1) return n+1;

        let max_N = []; // Максимальное число СТУПЕНЕЙ!!! (не концевых узлов).
        max_N.push(Array(k+1).fill(0));

        while (max_N[h][k] < n){
            h++;
            let row = []; row.push(0);
            for (let j = 1; j <= k; j++) {
                row.push(max_N[h - 1][j - 1] + max_N[h - 1][j] + 1);
            }
            max_N.push(row);
        }
        return h+1;
    }

    build (node = this.root) {
        const isLastLevel = node.depth === this.needDepth;

        /* Заполнили всё. */
        if (this.leafsNumber === this.maxLeafNumber) {
            node.allFilled = true;
            node.name = this.leafsNumber;
            return node.name;
        }

        /* Дошли до конца. Увеличили счётчик листьев. */
        if (isLastLevel) {
            node.name = this.leafsNumber;
            this.leafsNumber++;
            return node.name;
        }

        /* Тупик. Увеличили счётчик листьев. */
        if (node.leftDepth === this.leftLimit) {
            node.name = this.leafsNumber;
            this.leafsNumber++;
            return node.name;
        }

        /* Добавляем 2 узла. */
        if (this.leafsNumber < this.maxLeafNumber) {
            /* Левый. */
            node.children.push(new TNode(node.leftDepth + 1, node.depth + 1));
            const l = this.build(node.children[0]);
            /* Случай, когда правое поддерево избыточно. Удаляем левого ребёнка. */
            if (node.children[0].allFilled){
                node.name = node.children[0].name;
                node.children[0] = node.children[0].children[0];
            }
            /* Правый. */
            node.children.push(new TNode(node.leftDepth, node.depth + 1));
            const r = this.build(node.children[1]);

            /* Нумерация такая же, как в самом левом листе правого поддерева. */
            node.name = r;
            node.allFilled = node.children[0].allFilled || node.children[1].allFilled;
            return l;
        }

    }

    /* Преобразование данных для отображения. */
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