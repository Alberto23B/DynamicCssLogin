import React, { useState, useEffect } from "react";
import "./LoginForm.css"

export default function LoginForm({username, setUsername, password, setPassword}) {

    const [isValid, setIsValid] = useState(null);
    const [inputStyle, setInputStyle] = useState("inputs");
    const testUsername = "testusername";
    const testPassword = "mypassword";
    
    useEffect(() => {
        if (isValid !== null) {
          const newStyle = isValid ? "inputs correct-input" : "inputs wrong-input";
          setInputStyle(newStyle);
          const resetStyleTimeout = setTimeout(() => {
              setInputStyle("inputs");
          }, 500);
          return () => clearTimeout(resetStyleTimeout);
        }
    }, [isValid]);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsValid(null);
      setTimeout(() => {
          setIsValid(username === testUsername && password === testPassword);
          setUsername("");
          setPassword("");
      }, 0);
    }

    
    const handleReset = () => {
        setInputStyle("inputs");
        setUsername("");
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
            target.className="inputs whitespace-input";
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
            <input className={inputStyle} id="username" name="username"
            value={username} onChange={handleChange} 
            type="text" placeholder="Insert Username" 
            aria-label="username" required/>
            <label className="labels" htmlFor="password">Password: </label>
            <input className={inputStyle} id="password" name="password" 
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