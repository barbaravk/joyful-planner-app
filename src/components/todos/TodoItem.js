import React, {PropTypes} from "react";
import {ListItem} from "react-toolbox/lib/list";
import {Checkbox} from "react-toolbox/lib/checkbox";
import TodoItemMenu from "./TodoItemMenu";
import style from "./style.css";

const TodoItem = ({item, onChangeCheckbox, onDelete}) => {
  const menu = <TodoItemMenu key={item.key + "_menu"} onClick={() => onDelete(item.id)}/>;
  const checkbox = <Checkbox key={item.key + "_cb"} onChange={() => onChangeCheckbox(item)} checked={item.status == "closed"} className={style.todo_checkbox}/>;

  return (
    <ListItem
      selectable={true}
      className={style.todo_item}
      caption={item.title}
      legend={item.text}
      rightActions={[checkbox, menu]}
    />
  );
};

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  onChangeCheckbox: PropTypes.func.isRequired
};


export default TodoItem;