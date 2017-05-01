import React from "react";
import { ListItem } from 'react-toolbox/lib/list';
import TodoItemMenu from './TodoItemMenu'
import style from './style.css'

const TodoItem = ({item}) => {
  const menu = <TodoItemMenu key={item.key + "_menu"}/>;
  return (
    <ListItem
      selectable={true}
      ripple={false}
      className={style.todo_item}
      caption={item.title}
      legend={item.text}
      rightActions={[menu]}
    />
  )
};

export default TodoItem;