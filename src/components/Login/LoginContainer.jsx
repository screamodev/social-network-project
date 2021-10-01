import { setAuthUserData } from "../../redux/authReducer";
import { connect } from "react-redux";
import Login from "./Login";

let mapStateToProps = (state) => {
  return {};
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (formData) => {
      dispatch(setAuthUserData(formData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
