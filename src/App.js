import React, { useState } from "react";
import logo from './assets/logo.svg';
import './App.css';
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Dynamic CSS Login Form
        </h1>
      </header>
      <LoginForm />
    </div>
  );
}

export default App;
