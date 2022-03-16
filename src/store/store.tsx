import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
// @ts-ignore
import {reducer} from "./reducers.tsx";
import { createLogger } from 'redux-logger'
// @ts-ignore
import {TNode} from "../utils/TreeTypes.tsx";

const logger = createLogger({
    collapsed: true,
});

export interface IStore {
    stepsNum: number,
    nutsNum: number,
    currentNutsNum: number,
    activeNode: TNode,
}

const store = createStore(reducer, applyMiddleware(ReduxThunk, logger));
export default store;