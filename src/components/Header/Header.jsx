import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';



const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/240px-Instagram_logo_2016.svg.png" alt=''></img>
            <div className={classes.loginBlock}>
                {props.isLogin ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>)
}
export default Header;