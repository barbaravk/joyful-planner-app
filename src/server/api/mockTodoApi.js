//Mock Api for todos
import delay from "./delay";
const todos = [
  {
    id: 111,
    type: "TD",
    dateCreated: "02-08-2016",
    dateModified: "03-10-2016",
    dateClosed: "",
    tags: [1, 2],
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
    tags: [1, 3, 4],
    title: "Organise bridesmaid dresses delivery",
    text: "",
    status: "closed",
    subTasks: []
  }
];

const tags = [
  {
    id: 1,
    text: "todo",
    color: "blue"
  },
  {
    id: 2,
    text: "fashion",
    color: "red"
  },
  {
    id: 3,
    text: "photography",
    color: "yellow"
  },
  {
    id: 4,
    text: "bridesmaids",
    color: "pink"
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
        todos.map(todo => todo.tags = tags.filter(tag => todo.tags.includes(tag.id)));
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

  static  deleteTodoTag(todoId, tagId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingTodoIndex = todos.findIndex(td => td.id == todoId);
        const newTags = todos[existingTodoIndex].tags.filter(t => t.id != tagId);
        const newTodo = Object.assign({}, todos[existingTodoIndex], {tags: newTags});
        todos.splice(existingTodoIndex, 1, newTodo);
        resolve(newTodo);
      }, delay);
    });
  }
}

export default TodoApi;

