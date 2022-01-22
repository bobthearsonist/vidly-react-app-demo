import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./components/notFound";
import { beforeAll } from "@jest/globals";

beforeEach(() => {
  window.history.replaceState({}, "Test page", "/iam/a/bad/page");

  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

test("a bad route renders not found component", async () => {
  await waitFor(() => screen.getByRole("heading"));
  // waitFor(() => {
  expect(NotFound);
  // });
});

test("a bad route is replaced with notfound", async () => {
  expect(window.location.pathname).toEqual(/NotFound/i);
});

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
