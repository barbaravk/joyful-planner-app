import * as types from "./actionTypes";

export function toggleAddTodoDialog(active) {
  return active ? {type: types.CLOSE_ADD_TODO_DIALOG} : {type: types.OPEN_ADD_TODO_DIALOG};
}