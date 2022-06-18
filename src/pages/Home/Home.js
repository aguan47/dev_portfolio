import { motion } from "framer-motion";
import React from "react";
import { homeDetailsVariants, scrollDownVariants, scrollVariant } from "../../framer-motion/variants";
import classes from './Home.module.css';

const Home = () => {
    return(
        <motion.div className={classes.Home} initial="initial" animate="animate" variants={homeDetailsVariants}>
            <div className={classes.HomeDetails}>
                <h1>Angelo</h1>
                <h1>Guan</h1>
                <p>FULL STACK DEVELOPER</p>
            </div>
            <motion.div className={classes.ScrollDown} initial="initial" animate="animate" variants={scrollDownVariants}>
                <motion.span className="material-icons" animate="animate" variants={scrollVariant}>
                    keyboard_double_arrow_down
                </motion.span>
            </motion.div>
        </motion.div>
    );
}

export default Home;