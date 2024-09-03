import React, { useState } from "react";
import "./LoginForm.css"

export default function LoginForm({username, setUsername, password, setPassword}) {

    const [isValid, setIsValid] = useState(false);

    const testUsername = "testusername";
    const testPassword = "mypassword";

    const handleSubmit = (e) => {
      e.preventDefault();
      if (username === testUsername && password === testPassword) {
        setIsValid(true);
        e.target.className = "correctInput"
      } else {
        setIsValid(false);
        e.target.className = "wrongInput"
      }
      setUsername("")
      setPassword("");
    }
     
    const handleReset = () => {
        setUsername("")
        setPassword("");
    }

    const [detectWhiteSpace, setDetectWhiteSpace] = useState(false);
    const handleChange = ({target}) => {
        const regex = /\s+/;
        if (target.name === "username") {
            setUsername(target.value);
        }
        if (target.name === "password") {
            setPassword(target.value);
        } 
        if (regex.test(target.value)) {
            target.className="whiteSpaceInput";
            setDetectWhiteSpace(true)
        } else {
            target.className="inputs"
            setDetectWhiteSpace(false)
        }
    }


    return (
        <>
          <form className="form" onSubmit={handleSubmit}>
            <label className="labels" htmlFor="username">Username: </label>
            <input className="inputs" id="username" name="username"
            value={username} onChange={handleChange} 
            type="text" placeholder="Insert Username" 
            aria-label="username" required/>
            <label label className="labels" htmlFor="password">Password: </label>
            <input className="inputs" id="password" name="password" 
            value={password} onChange={handleChange} 
            type="password" placeholder="Insert Password" 
            aria-label="password" required/>
            {detectWhiteSpace && <p>No space allowed</p>}
            <input className="input-button" type="reset" value="Cancel" onClick={handleReset} aria-label="cancel-button"/>
            <input className="input-button" type="submit" value="Login" aria-label="login-button" />
            <p>{detectWhiteSpace && "No space allowed"}</p>
          </form>
        </>
    )
}