import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/authReducer";
import { createField, Input } from "../common/FormControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/index";

import classes from "../common/FormControls/FormControls.module.css";

//const maxLength30 = maxLengthCreator(30);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe, formData.captcha); //чрез санку
  };

  if (props.isLogin) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Login", "login", [required], Input)}
      {createField("Password", "password", [required], Input, {
        type: "password",
      })}
      {/* refact */}
      {createField(
        null,
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
        "remember me"
      )}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && createField("Enter captcha", "captcha", [required], Input)}

      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps, { login })(Login); //санка
