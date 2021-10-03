import React from "react";
import classes from "../ProfileInfo.module.css";


const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}:</b>{contactValue}</div>

}

export default Contact