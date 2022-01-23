import React from "react";
import { useLocation } from "react-router-dom";

export default function Shit({ onShit, movie }) {
  // V6 still not sure why state belongs in location... reasons?
  // const location = useLocation();
  const { state } = useLocation();

  return (
    <div>
      {"Shit"}
      <button onClick={onShit}>submit shit</button>
    </div>
  );
}
