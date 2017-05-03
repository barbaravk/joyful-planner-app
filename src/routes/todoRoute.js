import {loadTodos} from "../actions/todoActions";
import TodoPage from "../components/todos/TodoPage";

export default (store) => ({
  path: 'todo',
  getComponent (nextState, cb) {
    store
      .dispatch(loadTodos())
      .then(() => cb(null, TodoPage))
      .catch(cb);
  }
});