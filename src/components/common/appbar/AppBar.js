import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
// import { Link } from 'react-router';
import { Navigation } from 'react-toolbox/lib/navigation';
import { Link } from 'react-toolbox/lib/Link';
import theme from './style.css';

const MainAppBar = props => {
  return (
    <AppBar leftIcon='menu' {...props} flat fixed>
      <Navigation>
        <Link className={theme.link} href='#' label="home" />
      </Navigation>
    </AppBar>
  );
};

export default MainAppBar;