import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    
    if (!userId) {

       userId = this.props.authorizedUserId
       if(!userId) {
         this.props.history.push('/login')
       }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId)
  }

  render() {
    return <Profile {...this.props}/>;
  }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,    
    status: state.profilePage.status, 
    authorizedUserId: state.auth.userId,
    isLogin: state.auth.isLogin   
  });

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  //withAuthRedirect //эдакий конвейер снизу вверх
)(ProfileContainer);
