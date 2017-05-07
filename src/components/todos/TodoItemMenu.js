import React, {PropTypes} from "react";
import {IconMenu, MenuItem} from "react-toolbox/lib/menu";

const TodoItemMenu = ({onClick}) => {
  return (
  <IconMenu icon='more_vert'>
    <MenuItem value='delete' icon='delete' caption='Delete' onClick={onClick}/>
  </IconMenu>
  );
};

TodoItemMenu.propTypes = {
  onClick: PropTypes.func.isRequired
};


export default TodoItemMenu;