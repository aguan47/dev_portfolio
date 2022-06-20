import { useEffect } from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import Container from '../../component/Container/Container';
import classes from './Projects.module.css';
import Project from '../../component/Project/Project';


const Projects = ({setActiveItem, projects}) => {
    const [ref, {entry}] = useIntersectionObserver({threshold: 0});
    const inView = entry && entry.isIntersecting;

    useEffect(() => {
        if (inView) setActiveItem("PROJECTS");
    }, [inView]);

    return(
        <Container>
            <div ref={ref} id="PROJECTS" className={classes.Projects}>
                <h1 className={classes.Header}>Projects</h1>
                {
                    projects.map(project => <Project project={project}/>)
                }
            </div>
        </Container>
    );
}

export default Projects;