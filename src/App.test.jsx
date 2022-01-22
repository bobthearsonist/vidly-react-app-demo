import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { expect, test } from "@jest/globals";

test("a bad page renders not found", async () => {
  window.history.replaceState({}, "Test page", "/iam/a/bad/page");

  const app = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // const result = await app.findByTestId("NotFound");
  // expect(result.src).toContain("NotFound");

  waitFor(() => {
    // Use window.location.pathname instead
    expect(history.location.pathname).toEqual(/NotFound/i);
  });

  // expect(screen.getByText(/NotFound/i)).toBeInTheDocument();
});

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
