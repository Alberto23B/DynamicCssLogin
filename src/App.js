import React, { useState } from "react";
import logo from './assets/logo.svg';
import './App.css';
import LoginForm from "./LoginForm";
import InstructionTab from "./InstructionTab"

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [instructionsDisplay, setInstructionsDisplay] = useState("instructions")
 
  return (
    <>
    <InstructionTab instructionsDisplay={instructionsDisplay} setInstructionsDisplay={setInstructionsDisplay}/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="header-h1">
          <span className="span">D</span>ynamic CSS Login Form
        </h1>
      </header>
      <LoginForm 
      username={username} setUsername={setUsername}
      password={password} setPassword={setPassword}
      />
    </div>
    </>
  );
}

export default App;