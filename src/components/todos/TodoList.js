import React, {PropTypes} from "react";
import {List, ListSubHeader} from "react-toolbox/lib/list";
import TodoItem from "./TodoItem";

const TodoList = ({todos, onChangeCheckbox}) => {
  return (
    <List>
      <ListSubHeader caption="Todo List"/>
      {todos.map(item =>
        <TodoItem key={item.id + "_item"} item={item} onChangeCheckbox={onChangeCheckbox}/>
      )}
    </List>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onChangeCheckbox: PropTypes.func.isRequired
};

export default TodoList;