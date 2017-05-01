import React, {PropTypes} from 'react';
import { Layout, Panel, AppBar } from 'react-toolbox/lib';
import  MainAppBar from '../appbar/AppBar';
import style from './style.css';

class MainLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Panel>
          <MainAppBar title="Joyful"/>
          <div className={style.panel}>
            {this.props.children}
          </div>
        </Panel>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired
};

export default MainLayout;
