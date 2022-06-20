import classes from './Project.module.css';

const Project = ({project}) => {
    const { projectName, details } = project;
    return(
        <div className={classes.Project}>
            <h2>{projectName}</h2>
            <p>
                {details}
            </p>
        </div>
    );
}

export default Project;