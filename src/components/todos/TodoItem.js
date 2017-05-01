import React from "react";
import { ListItem } from 'react-toolbox/lib/list';

const TodoItem = ({item}) => {
  return (
    <ListItem
      caption={item.title}
      legend={item.text}
    />
  )
};

export default TodoItem;