import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/index";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.messagesData.map((message) => (
    <MessageItem message={message.message} id={message.id} />
  ));

 
  let addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody);
  };

  if (!props.isLogin) {
    return <Redirect to={"/login"} />; //Хуйня,как для функ компоненты
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
      </div>
      <MessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const maxLength50 = maxLengthCreator(50)

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength50]}
          name="newMessageBody"
          placeholder="Enter your message..."
        />
      </div>
      <div>
        <button>send</button>
      </div>
    </form>
  );
};

const MessageFormRedux = reduxForm({
  form: "message",
})(MessageForm);

export default Dialogs;
