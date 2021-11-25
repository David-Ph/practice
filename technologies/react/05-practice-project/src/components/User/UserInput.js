import React from 'react'

import Button from '../UI/Button';
import Card from '../UI/Card';

import classes from './UserInput.module.css';

function UserInput(props) {
    const usernameInput = document.querySelector('#username');
    const ageInput = document.querySelector('#age');

    const submitFormHandler = (event) => {
        event.preventDefault();
        props.onAddUser({
            username: usernameInput.value,
            age: ageInput.value,
            id: Math.random()
        });
        usernameInput.value = "";
        ageInput.value = "";
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" />
                </div>
                <div>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" name="age" />
                </div>
                <div>
                    <Button type="submit">Add User</Button>
                </div>
            </form>
        </Card>
    )
}

export default UserInput
