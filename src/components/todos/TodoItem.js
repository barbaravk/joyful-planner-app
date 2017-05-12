import React, {PropTypes} from "react";
import {ListItem} from "react-toolbox/lib/list";
import {Checkbox} from "react-toolbox/lib/checkbox";
import {Chip} from "react-toolbox/lib/chip";
import TodoItemMenu from "./TodoItemMenu";
import style from "./style.css";

const TodoItem = ({item, actions}) => {
  const {onDelete, onDeleteTag, onChangeCheckbox} = actions;

  const menu = <TodoItemMenu key={item.key + "_menu"} onClick={() => onDelete(item.id)}/>;
  const checkbox = <Checkbox key={item.key + "_cb"} onChange={() => onChangeCheckbox(item)} checked={item.status == "closed"} className={style.todo_checkbox}/>;

  const chips = (<div className={style.tag_container} key={item.key + "_tags"}>
    {item.tags.map(tag =>
      <Chip key={item.key + tag.text.substr(0, 1)} deletable onDeleteClick={() => onDeleteTag(item.id, tag.id)}>
        {tag.text}
      </Chip>)}
  </div>);

  const rightActions = [chips, checkbox, menu];

  return (
    <ListItem
      key={item.key}
      selectable
      className={style.todo_item}
      caption={item.title}
      legend={item.text}
      rightActions={rightActions}/>
  );
};

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default TodoItem;