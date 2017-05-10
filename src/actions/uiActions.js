import * as types from "./actionTypes";

export function toggleAddTodoDialog(active) {
  return active ? {type: types.CLOSE_ADD_TODO_DIALOG} : {type: types.OPEN_ADD_TODO_DIALOG};
}

export function updateAddTodoDialogInput(input) {
  return function (dispatch) {
    dispatch({type: types.EDIT_TODO_ERROR, error: ""});
    dispatch({type: types.UPDATE_ADD_TODO_DIALOG_INPUT, input: input});
  }
}
