import React, { useState, useEffect, useContext  } from "react";
import "./login.css";
import {LoginContext } from "./Authentication";

export default function LoginForm (){

    const {user, setUser, loggedIn, setLoggedIn} = useContext(LoginContext);

const submitHandler = () => {
    
}

    return(
        <div>
     <form onSubmit={submitHandler}>
                <h1>User Login</h1>
                <label>Username/Email</label>
                <input type="text"></input>
                <br></br>
                <label>Password</label>
                <input type="password"></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}