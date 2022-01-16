import React from "react";

const Like = ({ liked, onClick }) => {
  return (
    <i
      className={liked === false ? "fa fa-heart-o" : "fa fa-heart"}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

export default Like;
