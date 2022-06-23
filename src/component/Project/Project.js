import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import { headerVariant, projectDetailsVariant, timelineVariant } from '../../framer-motion/variants';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import classes from './Project.module.css';

const Project = ({project}) => {
    const { projectName, details, techStack, showCode, sourceCodeUrl, showWebsite, websiteUrl } = project;
    const [ref, {entry}] = useIntersectionObserver({threshold: 0.25});
    const controlProjectName = useAnimation();
    const controlProjectDetails = useAnimation();
    const controlTechStack = useAnimation();
    const controlButtons = useAnimation();

    const inView = entry && entry.isIntersecting;
    useEffect(() => {
        if (inView) {
            controlProjectName.start("animate");
            controlProjectDetails.start("animate");
            controlTechStack.start("animate");
            controlButtons.start("animate");
        }
    }, [inView]);


    return(
        <div ref={ref} className={classes.Project}>
            <motion.h2 initial="initial" animate={controlProjectName} variants={headerVariant}>{projectName}</motion.h2>
            <motion.p initial="initial" animate={controlProjectDetails} variants={projectDetailsVariant}>
                {details}
            </motion.p>
            <motion.div initial="initial" animate={controlTechStack} variants={timelineVariant}>
                <h4>Created using:</h4>
                <div className={classes.Logos}>
                {
                    techStack.map(tech => <Logo name={tech} alt={`Logo of ${tech}`} key={tech}/>)
                }
                </div>
            </motion.div>
            <motion.div className={classes.Options} initial="initial" animate={controlButtons} variants={timelineVariant}>
                <Button clickHandler={() => window.open(sourceCodeUrl)} disabled={!showCode}>View source code</Button>
                <Button clickHandler={() => window.open(websiteUrl)} disabled={!showWebsite}>View live website</Button>
            </motion.div>
        </div>
    );
}

export default Project;