import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";
import classes from "./Users.module.css";

let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  usersData,
  ...props
}) => {
  // функциональная компонента(clear)

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      />
      <div>
        {usersData.map((user) => {
          return (
            <User
              user={user}
              followingInProgress={props.followingInProgress}
              key={user.id}
              unfollow={props.unfollow}
              follow={props.follow}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Users;
