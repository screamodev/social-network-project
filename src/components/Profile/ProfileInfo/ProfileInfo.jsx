import React from "react";
import PreLoader from "../../common/preLoader/preLoader";
import userPhoto from "../../../assets/images/default_userAvatar.png";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateUserStatus}) => {

if (!profile) {
  return <PreLoader />
}

  return (
    <div>
      <div>
        {/* <img
          src="https://st.depositphotos.com/1000943/3414/i/600/depositphotos_34147625-stock-photo-grand-canal-in-venice.jpg"
          alt=""
        ></img> */}
      </div>
      <div>
        <img src={profile.photos.large != null ? profile.photos.large : userPhoto} className={classes.userProfileImg}/>
        <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
        <div>name: {profile.fullName}</div>
        <div>about: {profile.aboutMe || "none"}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
