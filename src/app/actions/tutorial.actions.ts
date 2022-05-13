import { Injectable } from "@angular/core";
import { Action, createAction } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.modal";

export const ADD_TUTORIAL = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove'

export class AddTutorial implements Action {
    
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export type Actions = AddTutorial | RemoveTutorial