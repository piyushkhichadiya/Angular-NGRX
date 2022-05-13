import { Tutorial } from "./models/tutorial.modal";

export interface AppState {
    readonly tutorial: Tutorial[];
    readonly count: number;
}