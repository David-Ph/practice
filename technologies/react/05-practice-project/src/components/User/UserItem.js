import React from "react";

import classes from "./UserItem.module.css";

function UserItem(props) {
  return <li className={classes['list-item']}>
      {`${props.user.username} (${props.user.age} years old)`}
  </li>;
}

export default UserItem;
