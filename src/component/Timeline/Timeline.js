import React from "react";
import classes from './Timeline.module.css';

const Timeline = ({events}) => {
    const timelineEvents = Object.keys(events).map((_, i) => {
        const { title, details, years, otherDetails } = events[i];
        return(
            <li className={classes.Event} key={`${events.title}-${i}`}>
                <h3>{title}</h3>
                <p>{details}</p>
                <p>{years}</p>
                <p>{otherDetails}</p>
            </li>
        )
    });


    return(
        <ul className={classes.Timeline}>
            {timelineEvents}
        </ul>
    );
}

export default Timeline;