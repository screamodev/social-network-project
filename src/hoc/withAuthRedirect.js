import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isLogin) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }
  let mapStateToPropsForRedirect = (state) => ({
    isLogin: state.auth.isLogin,
  });
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponent;
};
