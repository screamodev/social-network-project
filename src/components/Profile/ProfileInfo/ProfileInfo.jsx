import React from "react";
import PreLoader from "../../common/preLoader/preLoader";
import Profilestatus from "./ProfileStatus"

const ProfileInfo = (props) => {

if (!props.profile) {
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
        <img src={props.profile.photos.large}/>
        <Profilestatus status={"Hello"}/>
        <div>name: {props.profile.fullName}</div>
        <div>about: {props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
