import React, { useEffect } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import Container from '../../component/Container/Container';
import classes from './AboutMe.module.css';


const AboutMe = ({setActiveItem}) => {

    const [ref, { entry, rootRef }] = useIntersectionObserver({threshold: 0.25});
    const inView = entry && entry.isIntersecting;

    useEffect(() => {
        if (inView) setActiveItem("ABOUT ME");
    }, [inView]);

    return(
        <Container>
            <div className={classes.AboutMe} ref={ref} id="ABOUT ME">
                <h1 className={classes.Header}>Hello,</h1>
                <p>
                    I am <span>Angelo L. Guan</span>, a fourth-year student from the  University of the Philippines Los Baños 
                    studying Computer Science. I'm a Full Stack Developer with a keen interest in developing high-quality 
                    web applications, and I enjoy creating web applications to help other people meet their needs. As a developer, 
                    my goal is to build high-quality, high-performing, and easy-to-use web applications. 
                </p>
                <p>
                    As a <span>software developer</span>, I pride myself on being a competent programmer who prioritizes code maintainability, readability, 
                    and performance. In order to become a good programmer, I showed self-initiative in order to improve and polish my skills by 
                    doing side projects, studying new technology, and working for other companies. In addition, I apply the analytical skills that 
                    I acquired from university in order to create good experiences.
                </p>
                <p>If you have any inquiries, please contact <a href="#lol">me</a></p>
            </div>
        </Container>
    );
}

export default AboutMe;