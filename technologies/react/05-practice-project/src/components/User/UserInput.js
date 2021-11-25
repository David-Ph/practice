import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./UserInput.module.css";

function UserInput(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const usernameHandler = (event) => {
    setUsernameInput(event.target.value);
  };
  const ageHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
      return;
    }

    if (+ageInput < 1) {
      return;
    }

    props.onAddUser({
      username: usernameInput,
      age: ageInput,
      id: Math.random(),
    });

    setUsernameInput("");
    setAgeInput("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="usernameInput">Username</label>
          <input
            value={usernameInput}
            onChange={usernameHandler}
            id="usernameInput"
            name="usernameInput"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="ageInput">Age (Years)</label>
          <input
            value={ageInput}
            onChange={ageHandler}
            type="number"
            id="ageInput"
            name="ageInput"
          />
        </div>
        <div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
}

export default UserInput;
