import React from "react";
import { List, ListSubHeader } from 'react-toolbox/lib/list';
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
  return (
    <List>
      <ListSubHeader caption="Todo List"/>
      {todos.map(item =>
        <TodoItem item={item}/>
      )}
    </List>
  )
};

export default TodoList;