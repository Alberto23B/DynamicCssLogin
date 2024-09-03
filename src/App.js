import React, { useState, useEffect, useRef } from "react";
import logo from './assets/logo.svg';
import './App.css';
import LoginForm from "./LoginForm";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const hasPageRenderedOnce = useRef(false);

  useEffect(() => {
    if (hasPageRenderedOnce.current) {
      isValid ? alert("Correct") : alert("Incorrect")
    }
    hasPageRenderedOnce.current = true;
    }, [isValid])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Dynamic CSS Login Form
        </h1>
      </header>
      <LoginForm 
      username={username} setUsername={setUsername}
      password={password} setPassword={setPassword}
      setIsValid={setIsValid}
      />
    </div>
  );
}

export default App;
