import classes from './Button.module.css';

const Button = ({children, clickHandler, disabled}) => {
    return(
        <button disabled={disabled} className={classes.Button} onClick={clickHandler}>
            {children}
        </button>
    );
}

export default Button;