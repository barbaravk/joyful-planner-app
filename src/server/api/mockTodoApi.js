//Mock Api for todos

import delay from './delay';
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

class TodoApi {
  static getAllTodos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], todos));
      }, delay);
    });
  }
}

export default TodoApi;

