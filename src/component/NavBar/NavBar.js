import { motion } from "framer-motion";
import React from "react";
import { navBarVariant } from "../../framer-motion/variants";
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
        <motion.nav className={classes.NavBar} initial="initial" animate="animate" variants={navBarVariant}>
            <ul>
                {navBarItems}
            </ul>
        </motion.nav>
    );
}

export default NavBar;