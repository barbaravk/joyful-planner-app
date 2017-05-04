import * as types from "./actionTypes";
import todoApi from "../server/api/mockTodoApi";

export function loadTodosSuccess(todos) {
  return { type: types.LOAD_TODOS_SUCCESS, todos: todos};
}

export function createTodoSuccess(todo) {
  return {type: types.CREATE_TODO_SUCCESS, todo};
}

export function updateTodoSuccess(todo) {
  return {type: types.UPDATE_TODO_SUCCESS, todo};
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
      throw(error);
    });
  };
}