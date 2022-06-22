import { useEffect } from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import Container from '../../component/Container/Container';
import classes from './Projects.module.css';
import Project from '../../component/Project/Project';
import { motion, useAnimation } from 'framer-motion';
import { headerVariant } from '../../framer-motion/variants';


const Projects = ({setActiveItem, projects}) => {
    const [ref, {entry}] = useIntersectionObserver({threshold: 0});
    const inView = entry && entry.isIntersecting;
    const controlHeader = useAnimation();


    useEffect(() => {
        if (inView) {
            setActiveItem("PROJECTS");
            controlHeader.start("animate");
        }
    }, [inView]);

    return(
        <Container>
            <div ref={ref} id="PROJECTS" className={classes.Projects}>
                <motion.h1 className={classes.Header} initial="initial" animate={controlHeader} variants={headerVariant}>Projects</motion.h1>
                {
                    projects.map((project, i) => <Project project={project} key={i}/>)
                }
            </div>
        </Container>
    );
}

export default Projects;