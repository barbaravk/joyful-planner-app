import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList'
// import {Link} from 'react-router';
// import style from './style.css';

class TodoPage extends React.Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    const {todos} = this.props;
    return (
      <div>
        <h2>Test Todo Page</h2>
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