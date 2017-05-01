import React from 'react';
import { AppBar, Navigation, Link } from 'react-toolbox/lib';
// import { Link } from 'react-router';
import style from './style.css';

const MainAppBar = props => {
  return (
    <AppBar leftIcon='menu' {...props} flat>
      <Navigation>
        <Link className={style.link} href='/' label="home" />
      </Navigation>
    </AppBar>
  );
};

export default MainAppBar;