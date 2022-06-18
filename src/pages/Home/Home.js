import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import { homeDetailsVariants, scrollDownVariants, scrollVariant } from "../../framer-motion/variants";
import classes from './Home.module.css';

const Home = ({setActiveItem}) => {
    const [ref, { entry, rootRef }] = useIntersectionObserver({threshold: 0.25});
    const inView = entry && entry.isIntersecting;

    useEffect(() => {
        if (inView) setActiveItem("HOME");
    }, [inView]);


    return(
        <motion.div className={classes.Home}  ref={ref} initial="initial" animate="animate" variants={homeDetailsVariants} id="HOME">
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