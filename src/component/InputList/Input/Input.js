import classes from './Input.module.css';

const Input = ({name, type, value, isDisabled, placeholder, dispatch}) => {
    const changeTextHandler = e => {
        dispatch({
            type: "UPDATE_VALUE",
            payload: {
                name: name,
                value: e.target.value
            }
        });
    }

    let inputElement = null;
    if (type !== "textarea") {
        inputElement = (
            <input 
                type={type} 
                value={value} 
                disabled={isDisabled} 
                placeholder={placeholder}
                onChange={e => changeTextHandler(e)}
                className={classes.Input}
            />
        );
    } else {
        inputElement = (
            <textarea 
                placeholder={placeholder}
                className={classes.Textarea}
                disabled={isDisabled} 
                value={value}
                onChange={e => changeTextHandler(e)}
            />
        );
    }


    return(
        <div className={classes.InputField}>
            <label className={classes.Label}>{name}</label>
            { inputElement }
        </div>
    );
}

export default Input;