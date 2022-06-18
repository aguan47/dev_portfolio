import React from "react";
import classes from './NavBar.module.css';

const items = ["HOME", "ABOUT ME", "PROJECTS", "EXPERIENCE", "EDUCATION", "CONTACT ME"];

const NavBar = ({setActiveItem, active}) => {
    const navBarItems = items.map(item => {
        const listClass = (item === active) ? classes.Active : classes.NavBarItem;

        return(
            <li className={listClass} key={item} onClick={e => setActiveItem(item)}>
                <span className={classes.ItemSpan}>{item}</span>
            </li>
        )
    });


    return(
        <nav className={classes.NavBar}>
            <ul>
                {navBarItems}
            </ul>
        </nav>
    );
}

export default NavBar;