import React, {PropTypes} from "react";
import {List, ListSubHeader} from "react-toolbox/lib/list";
import {Button} from "react-toolbox/lib/button";
import TodoItem from "./TodoItem";

const TodoList = ({todos, actions}) => {
  const {toggleAddTodoDialog} = actions;
  return (
    <List>
      <ListSubHeader caption="Todo List"/>
      {todos.sort((a, b) => a.id - b.id).map(item =>
        <TodoItem key={item.id + "_item"} item={item} actions={actions}/>
      )}
      <Button icon='add' label='Add item' flat primary onMouseUp={() => toggleAddTodoDialog(false)}/>
    </List>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default TodoList;