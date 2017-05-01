import React from "react";
import { List, ListSubHeader } from 'react-toolbox/lib/list';
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
  return (
    <List>
      <ListSubHeader caption="Todo List"/>
      {todos.map(item =>
        <TodoItem key={item.id + "_item"} item={item}/>
      )}
    </List>
  )
};

export default TodoList;