import React from "react";
import { IconMenu, MenuItem } from 'react-toolbox/lib/menu';

const TodoItemMenu = props => {
  return (
  <IconMenu icon='more_vert'>
    <MenuItem value='delete' icon='delete' caption='Delete' />
  </IconMenu>
  )
};

export default TodoItemMenu;