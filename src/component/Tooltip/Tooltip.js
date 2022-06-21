import React from "react";
import classes from './Tooltip.module.css';


const Tooltip = ({text, children}) => {
    return(
        <div className={classes.Tooltip}>
            {children}
            <span className={classes.TooltipText}>{text}</span>
        </div>
    );
}

export default Tooltip;