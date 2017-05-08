import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function todoReducer(state = initialState.ui, action) {
  switch (action.type) {
    case types.OPEN_ADD_TODO_DIALOG:
      return Object.assign({}, state, {addTodoDialogActive: true});

    case types.CLOSE_ADD_TODO_DIALOG:
      return Object.assign({}, state, {addTodoDialogActive: false});

    default:
      return state;
  }
}