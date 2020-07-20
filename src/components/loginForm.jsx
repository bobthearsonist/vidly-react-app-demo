import React, { Component } from "react";
import Joi from "@hapi/joi";
import Form from "./common/form";
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

  handleSubmit = (account, errors) => {
    console.log({ errors });
    errors && this.setState({ errors });

    if (errors) return;
    //call the server
    console.log("login form submitted");
    console.log({ account });
  };

  handleChange = ({ data: account, errors }) => {
    this.setState({ account, errors });
  };

  fields = [
    { name: "username", label: "Username" },
    { name: "password", label: "Password" },
  ];

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <Form
          onSubmit={(account) => this.handleSubmit(account)}
          onChange={(account, errors) => this.handleChange(account, errors)}
          fields={this.fields}
          data={account}
          errors={errors}
          schema={this.schema}
        />
      </div>
    );
  }
}
