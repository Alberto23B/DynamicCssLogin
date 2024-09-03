import React from "react";

export default function LoginForm() {
    return (
        <>
          <form >
            <label htmlFor="username">Username: </label>
            <input id="username" name="username" type="text" placeholder="Insert Username" aria-label="username"/>
            <label htmlFor="password">Password: </label>
            <input id="password" name="password" type="text" placeholder="Insert Password" aria-label="password"/>
            <input type="reset" value="Cancel" aria-label="cancel-button" />
            <input type="submit" value="Submit" aria-label="submit-button" />
          </form>
        </>
    )
}