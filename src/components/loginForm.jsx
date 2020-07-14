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

  validations = {
    USERNAME_REQUIRED: (username, errors) => {
      if (_(username.trim()).isEmpty())
        errors.username = "Username is required";
      else delete errors.username;
      return errors;
    },
    PASSWORD_REQUIRED: (password, errors) => {
      if (_(password.trim()).isEmpty())
        errors.password = "Password is required";
      else delete errors.password;
      return errors;
    },
    PASSWORD_STRONG: (password, errors) => {
      if (!strongRegex.test(password))
        errors.password =
          "Password must contain one of each of the following [A-Za-z!@#$%^&*]";
      else delete errors.password;
      return errors;
    },
  };

  validate = (account) => {
    let errors = {};
    errors = this.validations.USERNAME_REQUIRED(account.username, errors);
    errors = this.validations.PASSWORD_STRONG(account.password, errors);
    errors = this.validations.PASSWORD_REQUIRED(account.password, errors);
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    const { account } = this.state;
    e.preventDefault();

    const errors = this.validate(account);
    console.log({ errors });
    errors && this.setState({ errors });

    if (errors) return;

    //call the server
    console.log("login form submitted");
    console.log({ account });
  };

  validateProperty = ({ name, value }, errors) => {
    if (name === "username") {
      errors = this.validations.USERNAME_REQUIRED(value, errors);
    }
    if (name === "password") {
      errors = this.validations.PASSWORD_STRONG(value, errors);
      errors = this.validations.PASSWORD_STRONG(value, errors);
    }
    return errors[name];
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    errors[input.name] = this.validateProperty(input, errors);
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
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
