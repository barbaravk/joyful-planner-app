import {combineReducers} from "redux";
import todos from "./todoReducer";
import ui from "./uiReducer";

const rootReducer = combineReducers ({
  todos,
  ui
});

export  default rootReducer;