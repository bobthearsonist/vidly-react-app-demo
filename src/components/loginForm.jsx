import React, { Component } from "react";
import Form from "./common/form";
import _ from "lodash";

export default class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validators = {
    username: (input) => this.validateUsername(input),
    password: (input) => this.validatePassword(input),
  };

  validatePassword = (password) => {
    if (password.length <= 3)
      return "password length must be greater than 3 characters";
    return null;
  };

  validateUsername = (username) => {
    let errors = {};
    if (username.length <= 3)
      errors = "username length must be greater than 3 characters";
    return errors;
  };

  validateAll = () => {
    const { account: data } = this.state;
    _(data)
      .keys()
      .each((input) => this.validate(input));
  };

  validate = (input) => {
    const { account: data, errors } = this.state;
    let error = this.validators[input](data[input]);

    errors[input] = error;

    this.setState({ errors });
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.validate(input.name);

    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("login clicked");

    this.validateAll();

    if (this.state.errors.length !== 0) return;

    console.log("login submitted");
  };

  loginFields = [
    {
      autofocus: true,
      label: "Username",
      id: "username",
      type: "text",
    },
    {
      label: "Password",
      id: "password",
      type: "password",
    },
  ];

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <Form
          onSubmit={(e) => this.handleSubmit(e)}
          onChange={(e) => this.handleChange(e)}
          data={account}
          errors={errors}
          fields={this.loginFields}
          submitText="Login"
        />
      </div>
    );
  }
}
