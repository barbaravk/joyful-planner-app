import React from "react";
import {AppBar, Navigation, Link} from "react-toolbox/lib";
// import { Link, IndexLink } from 'react-router';
import style from "./style.css";

const MainAppBar = props => {
  return (
    <AppBar {...props} flat>
      <Navigation>
        <Link className={style.link} href='/' label="Home"/>
        <Link className={style.link} href='/todo' label="Todo"/>
      </Navigation>
    </AppBar>
  );
};

export default MainAppBar;