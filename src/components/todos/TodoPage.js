import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as todoActions from "../../actions/todoActions";
import TodoList from "./TodoList";
import style from "./style.css";

// import {Link} from 'react-router';

class TodoPage extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
  }

  onChangeCheckbox(todo) {
    const newStatus = todo.status == "open" ? "closed" : "open";
    const newTodo = Object.assign({}, todo, {status: newStatus});
    this.props.actions.saveTodo(newTodo);
  }

  render() {
    const {todos} = this.props;
    return (
      <div className={style.todo_list}>
        <h3>Test Todo Page</h3>
        <TodoList todos={todos} onChangeCheckbox={this.onChangeCheckbox}/>
      </div>
    );
  }
}

TodoPage.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);