import React from "react";
const getLikedClass = (liked) => {
  return liked ? "fa fa-heart" : "fa fa-heart-o";
};
const handleLike = (onLike) => {
  console.log("like clicked");
  onLike();
};
const Like = ({ liked, onLike }) => {
  return (
    <i
      className={getLikedClass(liked)}
      aria-hidden="true"
      onClick={() => handleLike(onLike)}
    ></i>
  );
};

export default Like;
