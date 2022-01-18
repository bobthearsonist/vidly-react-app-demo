import React, { Component } from "react";
import Form from "./common/form";
import _ from "lodash";
import Joi from "joi-browser";

export default class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().min(3),
    password: Joi.string().required().min(3),
  };

  validators = {
    username: (input) => this.validateUsername(input),
    password: (input) => this.validatePassword(input),
  };

  validatePassword = (password) => {
    let errors = [];
    if (password.length <= 3)
      errors = ["password length must be greater than 3 characters"];
    return errors;
  };

  validateUsername = (username) => {
    let errors = [];
    if (username.length <= 3)
      errors = ["password length must be greater than 3 characters"];
    return errors;
  };

  validateAll = () => {
    const { errors, account } = this.state;
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    _(result.error.details).for(({ path, message }) => {
      errors[path[0]] = message;
    });
    this.setState({ errors });
  };

  validate = ({ name, value }) => {
    const { errors } = this.state;
    const { error } = Joi.validate(
      { [name]: value },
      { [name]: this.schema[name] }
    );

    _.isEmpty(error)
      ? _(errors).unset(name)
      : (errors[name] = error.details[0].message);

    this.setState({
      errors,
    });
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.validate({ name: input.name, value: input.value });

    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("login clicked");

    this.validateAll();

    if (this.state.errors.keys().length !== 0) return;

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
