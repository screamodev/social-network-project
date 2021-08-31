import React from "react";
import classes from "./MessageItem.module.css";
//import { useState } from 'react';

const MessageItem = (props) => {
  return <div className={classes.dialog}>{props.message}</div>;
};

export default MessageItem;
