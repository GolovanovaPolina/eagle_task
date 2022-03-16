import {combineReducers} from "redux";
import {action, ActionType, createReducer} from "typesafe-actions";
import {
    setActiveNodeActions,
    setCurrentNutsNumberActions,
    setNutsNumberActions,
    setStepsNumberActions
// @ts-ignore
} from "./actions.tsx";

type SetStepsNumberActionsType = ActionType<typeof setStepsNumberActions>;
type SetNutsNumberActionsType = ActionType<typeof setNutsNumberActions>;
type SetCurrentNutsNumberActionsType = ActionType<typeof setCurrentNutsNumberActions>;
type SetActiveNodeActionsType = ActionType<typeof setActiveNodeActions>;

export const stepsNumReducer = createReducer<number,SetStepsNumberActionsType>(0)
    .handleAction(setStepsNumberActions, (state, action) => action.payload)

export const nutsNumReducer = createReducer<number,SetNutsNumberActionsType>(0)
    .handleAction(setNutsNumberActions, (state, action) => action.payload)

export const currentNutsNumberReducer = createReducer<number,SetCurrentNutsNumberActionsType>(0)
    .handleAction(setCurrentNutsNumberActions, (state, action) => action.payload)

export const activeNodeReducer = createReducer<Node, SetActiveNodeActionsType>(null)
    .handleAction(setActiveNodeActions, (state, action) => action.payload)

export const reducer = combineReducers({
    stepsNum: stepsNumReducer,
    nutsNum: nutsNumReducer,
    currentNutsNum: currentNutsNumberReducer,
    activeNode: activeNodeReducer,
})
