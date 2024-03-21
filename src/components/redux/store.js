import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { todoReducer } from "./todolist/reducer";

const enhancer = devToolsEnhancer();
export const store = createStore(todoReducer, enhancer)