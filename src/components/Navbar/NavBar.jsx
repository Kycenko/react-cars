import React, {useMemo, useState} from 'react';
import styles from './NavBar.module.scss'

const NavBar = ({children}) => {
  return (
 <div>{children}</div>
    // <div className={styles.topnav}>
    //   <a className={styles.active} href="#home">Home</a>
    //
    //   <a href="#about">About</a>
    //   <a href="#contact">Contact</a>
    //   <input type="text" placeholder="Search.."/>
    // </div>

  );
};

export default NavBar;
