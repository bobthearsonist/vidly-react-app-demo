import React from "react";

const Like = (props) => {
  return (
    <i
      className={props.liked === false ? "fa fa-heart-o" : "fa fa-heart"}
      aria-hidden="true"
      onClick={props.onClick}
    />
  );
};

export default Like;
