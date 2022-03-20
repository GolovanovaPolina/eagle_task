import {createAction} from "typesafe-actions";
import {TNode} from "../utils/TreeTypes";

export const setStepsNumberActions = createAction("SET_STEPS_NUMBER", action => {
    return (value: number) => action(value);
});
export const setNutsNumberActions = createAction("SET_NUTS_NUMBER", action => {
    return (value: number) => action(value);
});
export const setCurrentNutsNumberActions = createAction("SET_CURRENT_NUTS_NUMBER", action => {
    return (value: number) => action(value);
});
export const setActiveNodeActions = createAction("SET_ACTIVE_NODE", action => {
    return (value: TNode) => action(value);
});
export const setDisableLevelsAction = createAction("SET_DISABLE_LEVELS", action => {
    return (value: number[]) => action(value);
});