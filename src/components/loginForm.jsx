import React, { Component } from "react";

export default class loginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              id="username"
              name="username"
              type="text"
              className="form-control"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              id="password"
              name="password"
              type="text"
              className="form-control"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
