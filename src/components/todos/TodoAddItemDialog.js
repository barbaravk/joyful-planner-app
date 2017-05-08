import React, {PropTypes} from "react";
import {Dialog} from "react-toolbox/lib/dialog";

const TodoAddItemDialog = ({active, actions}) => {
  const {toggleAddTodoDialog} = actions;

  return (
    <Dialog
      active={active}
      onOverlayClick={() => toggleAddTodoDialog(true)}>
      Test Dialog
    </Dialog>
  )
};

TodoAddItemDialog.propTypes = {
  active: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

export default TodoAddItemDialog;