import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import VidlyNavBar from "./vidlyNavBar";

test("console error in navbar for incorrect prop", async () => {
  // note that this isn't really a great test, but i wanted to have something to reference for asserting on console content
  var error = jest.spyOn(global.console, "error");
  window.history.replaceState({}, "", "/");

  render(
    <BrowserRouter>
      <VidlyNavBar />
    </BrowserRouter>
  );
  expect(error).not.toHaveBeenCalled();
});
