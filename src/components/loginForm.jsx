import React, { Component } from "react";

export default class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("login submitted");
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-control"
              autoFocus
              value={account.username}
              onChange={(e) => this.handleChange(e)}
              id="username"
              label="Username"
              name="username"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              value={account.password}
              onChange={(e) => this.handleChange(e)}
              id="password"
              label="Password"
              name="password"
              type="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
