import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useReducer } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import Container from '../../component/Container/Container';
import InputList from "../../component/InputList/InputList";
import { headerVariant, timelineVariant } from "../../framer-motion/variants";
import { initialInputState, inputReducer } from "../../reducers/reducer";
import classes from './ContactMe.module.css';


const ContactMe = ({setActiveItem}) => {
    const [ref, { entry }] = useIntersectionObserver({threshold: 0.25});
    const controlHeader = useAnimation();
    const controlForm = useAnimation();
    const [state, dispatch] = useReducer(inputReducer, initialInputState);

    const inView = entry && entry.isIntersecting;

    useEffect(() => {
        if (inView) {
            setActiveItem("CONTACT ME");
            controlHeader.start("animate");
            controlForm.start("animate");
        }
    }, [inView]);

    const submitHandler = async e => {
        e.preventDefault();
        Object.keys(state).forEach(input => dispatch({type: "DISABLE", payload: {name: input}}));
 
        const data = {
            service_id: process.env.REACT_APP_EMAILJS_SERVICE_ID,
            template_id: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            user_id: process.env.REACT_APP_EMAILJS_USER_ID,
            template_params: {
                from_name: state.name.value,
                email: state.email.value,
                message: state.message.value
            }
        }

        const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.status === 200) Object.keys(state).forEach(input => dispatch({type: "ERASE_VALUE", payload: {name: input}}));
        Object.keys(state).forEach(input => dispatch({type: "ENABLE", payload: {name: input}}));
    }   

    return(
        <Container>
            <div className={classes.Contact} id="CONTACT ME" ref={ref}>
                <motion.h1 initial="initial" animate={controlHeader} variants={headerVariant}>Contact me</motion.h1>
                <motion.div initial="initial" animate={controlForm} variants={timelineVariant}>
                    <p>If you're interested, please fill out the form below.</p>
                    <InputList inputs={state} dispatch={dispatch} submitFormHandler={e => submitHandler(e)}/>
                </motion.div>
            </div>
        </Container>
    );
}

export default ContactMe;