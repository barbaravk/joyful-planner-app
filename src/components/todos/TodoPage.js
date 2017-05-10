import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as todoActions from "../../actions/todoActions";
import * as uiActions from "../../actions/uiActions";
import TodoList from "./TodoList";
import TodoAddItemDialog from "./TodoAddItemDialog";
import style from "./style.css";

class TodoPage extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.toggleAddTodoDialog = this.toggleAddTodoDialog.bind(this);
  }

  onChangeCheckbox(todo) {
    const newStatus = todo.status == "open" ? "closed" : "open";
    const newTodo = Object.assign({}, todo, {status: newStatus});
    this.props.actions.saveTodo(newTodo);
  }

  onDelete(todoId) {
    this.props.actions.deleteTodo(todoId);
  }

  toggleAddTodoDialog() {
    this.props.actions.toggleAddTodoDialog(this.props.ui.addTodoDialogActive);
  }

  render() {
    const {todos} = this.props;
    const actions = {
      onChangeCheckbox: this.onChangeCheckbox,
      onDelete: this.onDelete,
      toggleAddTodoDialog: this.toggleAddTodoDialog
    };

    return (
      <div className={style.todo_list}>
        <h3>Test Todo Page</h3>
        <TodoList todos={todos} actions={actions}/>
        <TodoAddItemDialog toggle={actions.toggleAddTodoDialog}/>
      </div>
    );
  }
}

TodoPage.propTypes = {
  todos: PropTypes.array.isRequired,
  ui: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos,
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, todoActions, uiActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);