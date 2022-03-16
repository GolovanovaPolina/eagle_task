import {createAction} from "typesafe-actions";

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
    return (value: number) => action(value);
});