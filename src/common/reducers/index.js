import { setVisibility} from "./setVisibility";
import { todoList } from "./todoList";
import { combineReducers } from "redux";

// 将两部分reducer合并，实际就是将两部分store合并。
export const rootReducer = combineReducers({
    todoList,
    setVisibility
})