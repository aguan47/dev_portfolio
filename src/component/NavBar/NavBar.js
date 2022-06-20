import { motion } from "framer-motion";
import React from "react";
import { navBarVariant } from "../../framer-motion/variants";
import classes from './NavBar.module.css';

const items = ["HOME", "ABOUT ME", "PROJECTS", "EXPERIENCE", "EDUCATION", "CONTACT ME"];



const NavBar = ({active}) => {
    const navBarItems = items.map((item, i) => {
        const listClass = (item === active) ? classes.Active : classes.NavBarItem;

        return(
            <a href={`#${item}`} key={i}>
                <li className={listClass}>
                    <span className={classes.Items}>{item}</span>
                </li>
            </a>
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