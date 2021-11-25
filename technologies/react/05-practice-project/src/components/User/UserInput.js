import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./UserInput.module.css";

function UserInput(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState();

  const usernameHandler = (event) => {
    setUsernameInput(event.target.value);
  };
  const ageHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age(non-empty values)'
      })
      return;
    }

    if (+ageInput < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)'
      })
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

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
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
    </div>
  );
}

export default UserInput;
