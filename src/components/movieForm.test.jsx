import MovieForm from "./movieForm";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

test("MovieForm properly uses v6 params", async () => {
  window.history.replaceState({}, "", "/movie/1234");

  render(
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<MovieForm />}></Route>
      </Routes>
    </BrowserRouter>
  );

  expect(MovieForm);
});

test("MovieForm properly uses v6 params", async () => {
  window.history.replaceState(
    {},
    "Test page",
    "/movie/5b21ca3eeb7f6fbccd47181a"
  );

  render(
    <BrowserRouter>
      <MovieForm />
    </BrowserRouter>
  );

  // expect(movieForm.state.movie).not.toBeUndefined();
  expect(window.location.pathname).toEqual("/movie/5b21ca3eeb7f6fbccd47181a");
  expect(screen.getByRole("button")).not.toBeDisabled();
});
