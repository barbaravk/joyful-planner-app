import React, {PropTypes} from "react";
import {Dialog} from "react-toolbox/lib/dialog";
import {Input} from "react-toolbox/lib/input";

class TodoAddItemDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleChange(value) {
    this.setState(Object.assign({}, this.state, {inputValue: value}));
  }

  clearInput() {
    this.setState(Object.assign({}, this.state, {inputValue: ''}));
    this.props.actions.toggleAddTodoDialog(true);
  }

  render() {
    const {
      active,
      actions: {
        onSave, toggleAddTodoDialog
      }
    } = this.props;
    const dialogActions = [
      {label: "Save", onClick: onSave},
      {label: "Cancel", onClick: this.clearInput}
    ];
    return (
      <Dialog
        active={active}
        onOverlayClick={() => toggleAddTodoDialog(true)}
        actions={dialogActions}>
        <Input type='text' multiline maxLength={160} rows={3} placeholder="Add a new todo item..." value={this.state.inputValue} onChange={this.handleChange}/>
      </Dialog>
    );
  }
}

TodoAddItemDialog.propTypes = {
  active: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

export default TodoAddItemDialog;