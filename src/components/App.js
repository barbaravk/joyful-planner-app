// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import MainLayout from './common/layouts/MainLayout';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainLayout >
        {this.props.children}
        </MainLayout>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  // loading: PropTypes.bool.isRequired
};

// function mapStateToProps(state, ownProps) {
//     return {
//         loading: state.ajaxCallsInProgress > 0
//     };
// }

export default App;
