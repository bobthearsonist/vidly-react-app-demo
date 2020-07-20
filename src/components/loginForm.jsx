import React, { Component } from "react";
import Input from "./common/input";
import Joi from "@hapi/joi";
import _ from "lodash";
const strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
);
export default class loginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().min(3).max(20).token().label("Username"),
    password: Joi.string()
      .required()
      .min(8)
      .pattern(strongRegex)
      .message(
        "Must contain at least one number, one uppercase letter, one lowercase letter, and a symbol [!@#$%^&*]"
      )
      .label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error: errors } = Joi.object(this.schema).validate(
      this.state.account,
      options
    );

    if (!errors) return null;

    return Object.fromEntries(
      errors.details.map((error) => [error.path[0], error.message])
    );
  };

  validateProperty = ({ name, value }) => {
    const options = { abortEarly: false };
    const schema = { [name]: this.schema[name] };
    const object = { [name]: value };
    const { error: errors } = Joi.object(schema).validate(object, options);

    console.log({ errors });

    if (_(errors).isNil()) return {};

    return Object.fromEntries(
      errors.details.map((error) => [error.path[0], error.message])
    );
  };

  handleSubmit = (e) => {
    const { account } = this.state;
    e.preventDefault();

    const errors = this.validate();

    console.log({ errors });
    errors && this.setState({ errors });

    if (errors) return;

    //call the server
    console.log("login form submitted");
    console.log({ account });
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = this.validateProperty(input);
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
            error={errors["username"]}
          />
          <Input
            onChange={this.handleChange}
            name="password"
            label="Password"
            value={account.password}
            error={errors["password"]}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
