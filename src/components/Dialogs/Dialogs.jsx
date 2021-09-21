import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { Redirect } from "react-router";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.messagesData.map((message) => (
    <MessageItem message={message.message} id={message.id} />
  ));

  let newMessageBody = props.newMessageBody;

  let onSendMessageClick = () => {
    // props.store.dispatch(sendMessageCreator());
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
    //props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  if (!props.isLogin) {
    return <Redirect to={'/login'}/> //Хуйня,как для функ компоненты
  }
  
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messages}>
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea
                value={newMessageBody}
                onChange={onNewMessageChange}
                placeholder="Enter your message..."
              ></textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
