//Mock Api for todos
import delay from "./delay";
const todos = [
  {
    id: 111,
    type: "TD",
    dateCreated: "02-08-2016",
    dateModified: "03-10-2016",
    dateClosed: "",
    tags: ["photograpgy", "todo"],
    title: "Call photographer",
    text: "Call photographer tp discuss stuff...",
    status: "open",
    subTasks: [
      {
        id: 122,
        type: "TDS",
        text: "Discuss location",
        status: "open"
      },
      {
        id: 133,
        type: "TDS",
        text: "Finalise quote",
        status: "closed"
      }
    ]
  },
  {
    id: 222,
    type: "TD",
    dateCreated: "01-06-2016",
    dateModified: "01-06-2016",
    dateClosed: "10-07-2016",
    tags: ["fashion", "todo", "bridesmaids"],
    title: "Organise bridesmaid dresses delivery",
    text: "",
    status: "closed",
    subTasks: []
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (todo) => {
  return Math.random() * 1000;
};

class TodoApi {
  static getAllTodos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], todos));
      }, delay);
    });
  }

  static saveTodo(todo) {
    todo = Object.assign({}, todo); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTodoTitleLength = 10;
        if (todo.title.length < minTodoTitleLength) {
          reject(`Title must be at least ${minTodoTitleLength} characters.`);
        }
        if (todo.id) {
          const existingTodoIndex = todos.findIndex(a => a.id == todo.id);
          todos.splice(existingTodoIndex, 1, todo);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new todos in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          todo.id = generateId(todo);
          todos.push(todo);
        }
        resolve(todo);
      }, delay);
    });
  }

  static  deleteTodo(todoId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const deletedTodoIndex = todos.findIndex(todo => todo.id == todoId);
        todos.splice(deletedTodoIndex, 1);
        resolve(todoId);
      }, delay);
    });
  }
}

export default TodoApi;

