import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { todoReducer } from "./todolist/reducer";

const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({
    todos: todoReducer
})

export const store = createStore(rootReducer, enhancer)