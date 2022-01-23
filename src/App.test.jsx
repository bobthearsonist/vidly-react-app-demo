import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("a bad route renders not found component", async () => {
  window.history.replaceState({}, "Test page", "/iam/a/bad/page");

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const notFound = screen.getByText("NotFound");

  expect(notFound).toBeInTheDocument();
});

test("a bad route is replaced with notfound", async () => {
  window.history.replaceState({}, "Test page", "/iam/a/bad/page");

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(window.location.pathname).toEqual("/notfound");
});
