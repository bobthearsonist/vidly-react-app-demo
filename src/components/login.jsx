import React from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { Route, Routes, Link } from "react-router-dom";

export default function Login() {
  return (
    <React.Fragment>
      <ul className="nav nav-tabs">
        <Link className="nav nav-link" to={"login-form"}>
          Login
        </Link>
        <Link className="nav nav-link" to={"register-form"}>
          Register
        </Link>
      </ul>

      <Routes>
        <Route index element={<LoginForm />} />
        <Route path={"login-form"} element={<LoginForm />} />
        <Route path={"register-form"} element={<RegisterForm />} />
      </Routes>
    </React.Fragment>
  );
}
