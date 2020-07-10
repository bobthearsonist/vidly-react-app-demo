import React, { Component } from "react";
import Input from "./common/input";
import _ from "lodash";
const strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
export default class loginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validate = (account) => {
    const errors = {};

    if (_(account.username).isEmpty()) errors.username = "Username is required";
    if (_(account.password).isEmpty()) errors.password = "Password is required";
    if (!strongRegex.test(account.password))
      errors.password = "password does not meet  requirements";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate(this.state.account);
    console.log({ errors });
    this.setState({ errors });
    if (errors) return;

    const username = this.username.current.value;
    //call the server
    console.log("login form submitted " + username);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            name="username"
            label="Username"
            value={account.username}
          />
          <Input
            onChange={this.handleChange}
            name="password"
            label="Password"
            value={account.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
