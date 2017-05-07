import React, {PropTypes} from "react";
import {List, ListSubHeader} from "react-toolbox/lib/list";
import TodoItem from "./TodoItem";

const TodoList = ({todos, onChangeCheckbox, onDelete}) => {
  return (
    <List>
      <ListSubHeader caption="Todo List"/>
      {todos.sort((a, b) => a.id - b.id).map(item =>
        <TodoItem key={item.id + "_item"} item={item} onChangeCheckbox={onChangeCheckbox} onDelete={onDelete}/>
      )}
    </List>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onChangeCheckbox: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoList;