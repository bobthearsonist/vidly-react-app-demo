import React from "react";
import { useLocation, useParams, useLinkClickHandler } from "react-router-dom";

export default function Shit({
  onShit,
  someShit,
  anyThingElseYouWantAccessToFromRouter /*you MUST define teh thing you want to be passed from the router as a prop of the target element!*/,
}) {
  // V6 still not sure why state belongs in location... reasons?
  const location = useLocation();
  const { state } = location;
  const params = useParams();
  // const linkClickHandler = useLinkClickHandler();

  return (
    <div>
      {"Shit"}
      <button onClick={() => console.log("shit clicked")}>submit shit</button>
    </div>
  );
}
