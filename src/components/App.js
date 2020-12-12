import React, { Component, useState } from "react";
import "../styles/App.css";
import RegisterForm from "./Register";

class App extends Component {
  render() {
    return (
      <div id="main">
        <RegisterForm />
      </div>
    );
  }
}

export default App;
export const Register = RegisterForm;
