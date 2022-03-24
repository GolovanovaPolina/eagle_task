import {combineReducers} from "redux";
import { ActionType, createReducer} from "typesafe-actions";
import {
    setActiveNodeActions, setCurrentNutsNumberActions,
    decreaseCurrentNutsNumberActions, addDisableLevelsAction,
    setNutsNumberActions,
    setStepsNumberActions, setDisableLevelsAction
} from "./actions";
import {TNode} from "../utils/TreeTypes";

type SetStepsNumberActionsType = ActionType<typeof setStepsNumberActions>;
type SetNutsNumberActionsType = ActionType<typeof setNutsNumberActions>;
type SetCurrentNutsNumberActionsType = ActionType<typeof decreaseCurrentNutsNumberActions | typeof setCurrentNutsNumberActions>;
type SetActiveNodeActionsType = ActionType<typeof setActiveNodeActions>;
type SetDisableLevelsActionType = ActionType<typeof addDisableLevelsAction | typeof setDisableLevelsAction>;

export const stepsNumReducer = createReducer<number,SetStepsNumberActionsType>(0)
    .handleAction(setStepsNumberActions, (state, action) => action.payload)

export const nutsNumReducer = createReducer<number,SetNutsNumberActionsType>(0)
    .handleAction(setNutsNumberActions, (state, action) => action.payload)

export const currentNutsNumberReducer = createReducer<number,SetCurrentNutsNumberActionsType>(0)
    .handleAction(decreaseCurrentNutsNumberActions, (state, action) => state - action.payload)
    .handleAction(setCurrentNutsNumberActions, (state, action) => action.payload)

export const activeNodeReducer = createReducer<TNode, SetActiveNodeActionsType>(null)
    .handleAction(setActiveNodeActions, (state, action) => action.payload)

export const disableLevelsReducer = createReducer<number[], SetDisableLevelsActionType>([])
    .handleAction(addDisableLevelsAction, (state, action) => state.concat(action.payload))
    .handleAction(setDisableLevelsAction, ((state, action) => action.payload))

export const reducer = combineReducers({
    stepsNum: stepsNumReducer,
    nutsNum: nutsNumReducer,
    currentNutsNum: currentNutsNumberReducer,
    activeNode: activeNodeReducer,
    disableLevels: disableLevelsReducer,
})
