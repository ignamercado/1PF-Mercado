import { createReducer, on } from "@ngrx/store";
import { contadorActions } from "../actions";

export interface ContadorState {
    value: number;
}

export const featureName = 'contador';

const initialState: ContadorState = {
    value: 0,
}

export const contadorReducer = createReducer<ContadorState>(
    initialState,
    on(contadorActions.incrementar, (state) => {
        return  {
            ...state,
            value: state.value + 1,
        }
    }),
    on(contadorActions.decrementar, (state, action) => {
        return {
            ...state,
            value: state.value - action.cantidad,
        }
    })
    );