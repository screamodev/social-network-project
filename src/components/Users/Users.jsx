import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/default_userAvatar.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  // функциональная компонента

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={classes.pagesHolder}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage == p && classes.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.usersData.map((user) => {
        return (
          <div key={user.id} className={classes.usersWrapper}>
            <div>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                    alt=""
                    className={classes.usersPhoto}
                  />
                </NavLink>
              </div>
              <div className={classes.usersButtonsHolder}>
                {user.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.follow(user.id);
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
      })}
    </div>
  );
};
export default Users;
