import { combineReducers } from "redux";

import { setVisibility} from "./setVisibility";
import { todoList } from "./todoList";
import { ToggleMini, ToggleSkin } from "./client.js";

// 将两部分reducer合并，实际就是将两部分store合并。
export const rootReducer = combineReducers({
    todoList,
    setVisibility,
    ToggleMini,
    ToggleSkin
})