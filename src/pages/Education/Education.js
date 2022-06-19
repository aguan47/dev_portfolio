import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import Container from '../../component/Container/Container';
import Timeline from "../../component/Timeline/Timeline";
import { headerVariant, timelineVariant } from "../../framer-motion/variants";
import classes from './Education.module.css';


const Education = ({setActiveItem, educationalBg}) => {
    const [ref, { entry }] = useIntersectionObserver({threshold: 0.25});
    const controlHeader = useAnimation();
    const controlTimeline = useAnimation();

    const inView = entry && entry.isIntersecting;

    useEffect(() => {
        if (inView) {
            setActiveItem("EDUCATION");
            controlHeader.start("animate");
            controlTimeline.start("animate");
        } 
    }, [inView]);

    return(
        <Container>
            <div className={classes.Education} ref={ref} id="EDUCATION">
                <motion.h1  initial="initial" animate={controlHeader} variants={headerVariant}>Education</motion.h1>
                <motion.div initial="initial" animate={controlTimeline} variants={timelineVariant}>
                    <Timeline events={educationalBg}/>
                </motion.div>
            </div>
        </Container>
    );
}

export default Education;