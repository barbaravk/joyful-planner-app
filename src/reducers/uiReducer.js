import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function todoReducer(state = initialState.ui, action) {
  switch (action.type) {
    case types.OPEN_ADD_TODO_DIALOG:
      return Object.assign({}, state, {addTodoDialogActive: true});

    case types.CLOSE_ADD_TODO_DIALOG:
      return Object.assign({}, state, {addTodoDialogActive: false});

    case types.UPDATE_ADD_TODO_DIALOG_INPUT:
      return Object.assign({}, state, {dialogInput: action.input});

    case types.EDIT_TODO_ERROR:
      return Object.assign({}, state, {dialogError: action.error});

    default:
      return state;
  }
}