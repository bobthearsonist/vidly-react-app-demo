import React from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { Route, Routes, NavLink } from "react-router-dom";

export default function Login() {
  return (
    <React.Fragment>
      <ul className="nav nav-tabs">
        <NavLink className="nav nav-link" to={"login-form"}>
          Login
        </NavLink>
        <NavLink className={"nav nav-link"} to={"register-form"}>
          Register
        </NavLink>
      </ul>

      <Routes>
        <Route index element={<LoginForm />} />
        <Route path={"login-form"} element={<LoginForm />} />
        <Route path={"register-form"} element={<RegisterForm />} />
      </Routes>
    </React.Fragment>
  );
}
