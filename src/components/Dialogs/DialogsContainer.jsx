import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let updateNewMessageBody = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      sendMessage={sendMessage}
      updateNewMessageBody={updateNewMessageBody}
      dialogsData={state.dialogsPage.dialogsData}
      messagesData={state.dialogsPage.messagesData}
      state={state.dialogsPage}
    />
  );
};

export default DialogsContainer;
