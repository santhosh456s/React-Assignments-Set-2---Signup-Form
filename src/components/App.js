import { Radio } from "@material-ui/core";
import React from "react";
import Home from "./Home";
import "..styles/App.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  nameError: "",
  emailError: "",
  passwordError: "",
  phoneNumberError: ""
};

export default class App extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneNumberError = "";
    // let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (this.state.phoneNumber.length >= 10) {
      phoneNumberError = "phoneNumber shoud be 10 digit";
    }

    if (emailError || nameError || phoneNumberError) {
      this.setState({ emailError, nameError, phoneNumberError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      <Home email={this.state.email} />;
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            data-testid="name"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            name="email"
            data-testid="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            defaultChecked
            type="radio"
            id="male"
            name="gender"
            value="male"
          />
          <label for="male">Male</label>
          <br />
          <input type="radio" id="female" name="gender" value="female" />
          <label for="female">Female</label>
          <br />
          <input type="radio" id="other" name="gender" value="other" />
          <label for="other">Other</label>
        </div>
        <div>
          <input
            name="phone"
            data-testid="phoneNumber"
            placeholder="phoneNumber"
            type="number"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.phoneNumberError}
          </div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            data-testid="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <button data-testid="submit" type="submit">
          submit
        </button>
      </form>
    );
  }
}
