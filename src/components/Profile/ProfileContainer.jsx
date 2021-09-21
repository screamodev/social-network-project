import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,          
  });

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// old

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { getUserProfile })(
//   WithUrlDataContainerComponent
// );

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  //withAuthRedirect //эдакий конвейер снизу вверх
)(ProfileContainer);
