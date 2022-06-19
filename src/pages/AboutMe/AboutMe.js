import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import Container from '../../component/Container/Container';
import { aboutMeHeaderVariant, aboutMeParagraph1Variant, aboutMeParagraph2Variant, aboutMeParagraph3Variant, headerVariant } from "../../framer-motion/variants";
import classes from './AboutMe.module.css';

const AboutMe = ({setActiveItem}) => {

    const [ref, { entry, rootRef }] = useIntersectionObserver({threshold: 0.25});
    const controlHeader = useAnimation();
    const controlPara1 = useAnimation();
    const controlPara2 = useAnimation();
    const controlPara3 = useAnimation();


    const inView = entry && entry.isIntersecting;

    useEffect(() => {
        if (inView) setActiveItem("ABOUT ME");
        if (inView) { 
            controlHeader.start("animate");
            controlPara1.start("animate");
            controlPara2.start("animate");
            controlPara3.start("animate");

        };
    }, [inView]);

    return(
        <Container>
            <div className={classes.AboutMe} ref={ref} id="ABOUT ME">
                <motion.h1 className={classes.Header} initial="initial" animate={controlHeader} variants={headerVariant}>Hello,</motion.h1>
                <motion.p initial="initial" animate={controlPara1} variants={aboutMeParagraph1Variant}>
                    I am <span>Angelo L. Guan</span>, a fourth-year student from the  University of the Philippines Los Baños 
                    studying Computer Science. I'm a Full Stack Developer with a keen interest in developing high-quality 
                    web applications, and I enjoy creating web applications to help other people meet their needs. As a developer, 
                    my goal is to build high-quality, high-performing, and easy-to-use web applications. 
                </motion.p>
                <motion.p initial="initial" animate={controlPara2} variants={aboutMeParagraph2Variant}>
                    As a <span>software developer</span>, I pride myself on being a competent programmer who prioritizes code maintainability, readability, 
                    and performance. In order to become a good programmer, I showed self-initiative in order to improve and polish my skills by 
                    doing side projects, studying new technology, and working for other companies. In addition, I apply the analytical skills that 
                    I acquired from university in order to create good experiences.
                </motion.p>
                <motion.p initial="initial" animate={controlPara3} variants={aboutMeParagraph3Variant}>If you have any inquiries, please contact <a href="#CONTACT ME">me</a></motion.p>
            </div>
        </Container>
    );
}

export default AboutMe;