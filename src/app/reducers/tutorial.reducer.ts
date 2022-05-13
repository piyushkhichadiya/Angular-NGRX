import { createReducer, on } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.modal";
import * as TutorialAction from '../actions/tutorial.actions'
import { increment, decrement, reset } from "../actions/tutorial.actions";

const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.co.in'
}

const defaultState: number = 0;

export const reducer = createReducer(
    defaultState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 10)
    
)

// export function newReducer(state: Tutorial[] = [initialState], action: TutorialAction.Actions) {
//     switch(action.type) {
//         case TutorialAction.ADD_TUTORIAL:
//             return [...state, action.payload];
//         default:
//             return state;
//     }
// }

export function newReducer(state: Tutorial[] = [initialState], action: any) {
    switch (action.type) {
        case TutorialAction.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialAction.REMOVE_TUTORIAL:
            return state.filter((item, index) => index !== action.payload);
      default:
          return state;
    }
}