import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList'
import style from './style.css';
// import {Link} from 'react-router';

class TodoPage extends React.Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    const {todos} = this.props;
    return (
      <div className={style.todo_list}>
        <h3>Test Todo Page</h3>
        <TodoList todos={todos} />
      </div>
    );
  }
}

TodoPage.propTypes = {
  todos: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoPage);