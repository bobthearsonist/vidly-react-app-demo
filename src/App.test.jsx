import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./components/notFound";

beforeEach(() => {
  window.history.replaceState({}, "Test page", "/iam/a/bad/page");

  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

test("a bad route renders not found component", async () => {
  expect(NotFound);
});

test("a bad route is replaced with notfound", async () => {
  expect(window.location.pathname).toEqual("/notfound");
});
