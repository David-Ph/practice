import React from "react";

import Card from "../UI/Card";
import UserItem from "./UserItem";

import classes from "./UserList.module.css";

function UserList(props) {
  return (
    <Card>
      {props.users.map((user) => {
        return <UserItem user={user} key={user.id} id={user.id} />;
      })}
    </Card>
  );
}

export default UserList;
