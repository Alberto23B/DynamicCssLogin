import React, { useState } from "react";

export default function LoginForm({username, setUsername, password, setPassword}) {

    const [isValid, setIsValid] = useState(false);
    const testUsername = "testusername";
    const testPassword = "mypassword"

    const handleSubmit = (e) => {
      e.preventDefault();
      if (username === testUsername && password === testPassword) {
        setIsValid(true);
        setUsername("")
        setPassword("");
        alert("Correct")
      } else {
        setIsValid(false);
        alert("Incorrect")
      }
      
    }
     
    const handleReset = () => {
        setUsername("")
        setPassword("");
    }

    return (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input id="username" name="username"
            value={username} onChange={(e) => setUsername(e.target.value)} 
            type="text" placeholder="Insert Username" 
            aria-label="username" required/>
            <label htmlFor="password">Password: </label>
            <input id="password" name="password" 
            value={password} onChange={(e) => setPassword(e.target.value)} 
            type="password" placeholder="Insert Password" 
            aria-label="password" required/>
            <input type="reset" value="Cancel" onClick={handleReset} aria-label="cancel-button"/>
            <input type="submit" value="Login" aria-label="login-button" />
          </form>
        </>
    )
}