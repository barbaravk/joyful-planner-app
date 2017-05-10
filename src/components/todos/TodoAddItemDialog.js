import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as todoActions from "../../actions/todoActions";
import * as uiActions from "../../actions/uiActions";
import {Dialog} from "react-toolbox/lib/dialog";
import {Input} from "react-toolbox/lib/input";

class TodoAddItemDialog extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(value) {
    this.props.actions.updateAddTodoDialogInput(value);
  }

  onClear() {
    this.props.actions.updateAddTodoDialogInput("");
    this.props.toggle(true);
  }

  onSave() {
    const newTodo = Object.assign({},
      {
        type: "TD",
        dateCreated: Date(),
        dateModified: "",
        dateClosed: "",
        tags: [],
        title: this.props.ui.dialogInput,
        text: "",
        status: "open",
        subTasks: []
      }
    );
    this.props.actions.saveTodo(newTodo);
  }

  render() {
    const {toggle} = this.props;
    const dialogActions = [
      {label: "Save", onClick: this.onSave},
      {label: "Cancel", onClick: this.onClear}
    ];
    return (
      <Dialog
        active={this.props.ui.addTodoDialogActive}
        onOverlayClick={() => toggle(true)}
        actions={dialogActions}>
        <Input type='text' multiline maxLength={160} rows={3} error={this.props.ui.dialogError} placeholder="Add a new todo item..." value={this.props.ui.dialogInput} onChange={this.onChange}/>
      </Dialog>
    );
  }
}

TodoAddItemDialog.propTypes = {
  ui: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, todoActions, uiActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoAddItemDialog);