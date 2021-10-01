import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
  login: state.auth.login,
});

export default connect(mapStateToProps, {logout })(HeaderContainer); //доб логин в магаз
