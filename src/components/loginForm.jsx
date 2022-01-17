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
    let errors = {};
    if (password.length <= 3)
      errors = "password length must be greater than 3 characters";
    return errors;
  };

  validateUsername = (username) => {
    let errors = {};
    if (username.length <= 3)
      errors = "password length must be greater than 3 characters";
    return errors;
  };

  validate = () => {
    const { account: data } = this.state;
    const errors = _(data)
      .keys()
      .map((input) => {
        let error = this.validators[input](data[input]);
        if (!_(error).isEmpty()) return { [input]: error };
      })
      .value()
      .filter(Boolean);
    this.setState({ errors });
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("login clicked");

    this.validate();

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
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <Form
          onSubmit={(e) => this.handleSubmit(e)}
          onChange={(e) => this.handleChange(e)}
          data={account}
          fields={this.loginFields}
          submitText="Login"
        />
      </div>
    );
  }
}
