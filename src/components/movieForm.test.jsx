import MovieForm from "./movieForm";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
