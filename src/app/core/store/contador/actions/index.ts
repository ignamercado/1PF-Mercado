import { createActionGroup, emptyProps, props } from "@ngrx/store";


export const contadorActions = createActionGroup({
    source: 'Contador',
    events: {
       'incrementar': emptyProps(),
       'decrementar': props<{ cantidad: number }>(),
    }
});