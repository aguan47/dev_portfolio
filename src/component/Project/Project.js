import Logo from '../Logo/Logo';
import classes from './Project.module.css';

const Project = ({project}) => {
    const { projectName, details, techStack } = project;
    return(
        <div className={classes.Project}>
            <h2>{projectName}</h2>
            <p>
                {details}
            </p>
            <h4>Created using:</h4>
            <div className={classes.Logos}>
            {
                techStack.map(tech => <Logo name={tech} alt={`Logo of ${tech}`}/>)
            }
            </div>
        </div>
    );
}

export default Project;