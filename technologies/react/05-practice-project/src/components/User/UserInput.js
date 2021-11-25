import React from 'react'

import Button from '../UI/Button';
import Card from '../UI/Card';

import classes from './UserInput.module.css';

function UserInput() {
    return (
        <Card className={classes.input}>
            <form>
                <div>
                    <label for="username">Username</label>
                    <input id="username" name="username" type="text" />
                </div>
                <div>
                    <label for="age">Age (Years)</label>
                    <input type="text" id="age" name="age" />
                </div>
                <div>
                    <Button type="submit">Add User</Button>
                </div>
            </form>
        </Card>
    )
}

export default UserInput
