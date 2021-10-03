import React from "react";
import { reduxForm } from "redux-form";
import classes from "../ProfileInfo.module.css";

import {
  createField,
  Input,
  Textarea,
} from "../../../common/FormControls/FormsControls";

const ProfileDataForm = ({ handleSubmit,profile,error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
        {error && <div className={classes.formSummaryError}>{error}</div>}
      </div>
      <div>
        <b>name:</b> {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job:</b>
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>Professional skills:</b>
        {createField(
          "My Professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About me:</b>
        {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts:</b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={classes.contact}>
                <b>{key}: </b>{createField(key, "contacts."+ key, [], Input)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
