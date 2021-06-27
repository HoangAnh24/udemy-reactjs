import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
    const [username, setusername] = useState("");
    const [age, setage] = useState("");
    const [error, seterror] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            seterror({
                title : 'Invalid input',
                msg : "Please enter a valid name and age (non-empty values)."
            })
            return;
        }
        if (age < 1) {
            seterror({
                title : 'Invalid age',
                msg : "Please enter a valid name and age (> 0)."
            })
            return;
        }
        props.onAddUser(username, age);
        setusername("");
        setage("");
    };

    const onChangeUsername = (event) => {
        setusername(event.target.value);
    };

    const onChangeAge = (event) => {
        setage(event.target.value);
    };

    const errorHandel = (event) => {
        seterror(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.msg} onConfirm={errorHandel}/>}
            <Card clName={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        onChange={onChangeUsername}
                        value={username}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={onChangeAge} value={age} />
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;
