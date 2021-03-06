import * as types from "./actionTypes";
import * as uiActions from "./uiActions";
import todoApi from "../server/api/mockTodoApi";

export function loadTodosSuccess(todos) {
  return { type: types.LOAD_TODOS_SUCCESS, todos: todos};
}

export function createTodoSuccess(todo) {
  return function (dispatch) {
    dispatch(uiActions.toggleAddTodoDialog(true));
    dispatch(uiActions.updateAddTodoDialogInput(""));
    dispatch({type: types.CREATE_TODO_SUCCESS, todo});
  };
}

export function updateTodoSuccess(todo) {
  return {type: types.UPDATE_TODO_SUCCESS, todo};
}

export function deleteTodoSuccess(todoId) {
  return {type: types.DELETE_TODO_SUCCESS, todoId};
}

export function editTodoError(error) {
  return {type: types.EDIT_TODO_ERROR, error};
}

export function loadTodos() {
  return function(dispatch) {
    return todoApi.getAllTodos().then(todos => {
      dispatch(loadTodosSuccess(todos));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveTodo(todo) {
  return function (dispatch, getState) {
    return todoApi.saveTodo(todo).then(savedTodo => {
      todo.id ? dispatch(updateTodoSuccess(savedTodo)) : dispatch(createTodoSuccess(savedTodo));
    }).catch(error => {
      dispatch(editTodoError(error));
    });
  };
}

export function deleteTodo(todoId) {
  return function (dispatch, getState) {
    return todoApi.deleteTodo(todoId).then(deletedTodoId => {
      dispatch(deleteTodoSuccess(deletedTodoId));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteTodoTag(todoId, tagId) {
  return function (dispatch, getState) {
    return todoApi.deleteTodoTag(todoId, tagId).then(updatedTodo => {
      dispatch(updateTodoSuccess(updatedTodo));
    }).catch(error => {
      throw(error);
    });
  };
}