import React, { useState } from 'react';
import { NavList } from "./NavList";
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom'


const Navigation = () => {

    const [click, setClick] = useState(false);

    const navlist = NavList.map(({ url, title }, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url} activeClassName={classes.active}>{title}</NavLink>
            </li>
        )
    });

    return (
        <div className={classes.container}>
            <div className={classes.navbar}>
                <div className={classes.logo}>
                    <font className={classes.logoImage}>Logo Image</font>
                </div>

                <div className={classes.menubar} onClick={() => { setClick(!click) }}>
                    <i className={click ? `fas fa-times ${classes.times}` : `fas fa-briefcase-medical ${classes.briefcaseMedical}`}></i>
                </div>

                <ul className= {click ? classes.navigation : `${classes.navigation} ${classes.close}`} onClick={() => { setClick(!click) }}>
                    {navlist}
                </ul>
            </div>
        </div>
    )
}

export default Navigation
