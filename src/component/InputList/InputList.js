import Input from "./Input/Input";
import classes from './Input/Input.module.css';

const InputList = ({inputs, dispatch, submitFormHandler}) => {
    let isInputsDisabled = false;
    const inputList = Object.keys(inputs).map(input => {
        isInputsDisabled = isInputsDisabled || inputs[input].isDisabled;
        return(
            <Input {...inputs[input]} name={input} dispatch={dispatch} key={input}/>
        );
    });


    return(
        <form>
            {inputList}
            <input 
                type="submit" 
                value={"Send me a message!"} 
                className={classes.Submit} 
                onClick={submitFormHandler}
                disabled={isInputsDisabled}
            />
        </form>
    );
}

export default InputList;