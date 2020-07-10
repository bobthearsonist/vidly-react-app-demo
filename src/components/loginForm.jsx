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
    const { account, errors } = this.state;
    e.preventDefault();

    if (errors) return;

    //call the server
    console.log("login form submitted");
    console.log({ account });
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });

    const errors = this.validate(account);
    console.log({ errors });
    errors && this.setState({ errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            name="username"
            label="Username"
            value={account.username}
            error={errors.username}
          />
          <Input
            onChange={this.handleChange}
            name="password"
            label="Password"
            value={account.password}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
