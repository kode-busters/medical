import React, { useState } from 'react';
import { NavList } from "./NavList";
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import logoLight from '../img/logo1light.png'


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
                    <NavLink exact to='/'><img src={logoLight} alt='company' /></NavLink>
                </div>

                <div className={classes.menubar} onClick={() => { setClick(!click) }}>
                    <i className={click ? `fas fa-times ${classes.times}` : `fas fa-briefcase-medical ${classes.briefcaseMedical}`}></i>
                </div>

                <ul className={click ? classes.navigation : `${classes.navigation} ${classes.close}`} onClick={() => { setClick(!click) }}>
                    {navlist}
                </ul>
            </div>
        </div>
    )
}

export default Navigation
