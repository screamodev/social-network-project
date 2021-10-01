import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/default_userAvatar.png";
import { NavLink } from "react-router-dom";

let User = ({
  user,
  followingInProgress,
  unfollow,
  follow,
  ...props
}) => {
  // функциональная компонента(clear)

  return (

    <div className={classes.usersWrapper}>
      <div>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt=""
              className={classes.usersPhoto}
            />
          </NavLink>
        </div>
        <div className={classes.usersButtonsHolder}>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              follow
            </button>
          )}
        </div>
      </div>
      <div className={classes.infoHolder}>
        <div>
          <div>Name: {user.name}</div>
          <div>Bio: {user.status}</div>
        </div>
        <div>
          <div>Country: {"user.location.country"}</div>
          <div>city: {"user.location.city"}</div>
        </div>
      </div>
    </div>
  );
};
export default User;
