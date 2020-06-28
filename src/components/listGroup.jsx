/* eslint-disable no-lone-blocks */
import React from "react";

const ListGroup = ({
  items,
  active,
  onItemSelect,
  text = "name",
  value = "_id",
  hasAll = true,
}) => {
  return (
    <div>
      {hasAll ? all(active, onItemSelect) : null}

      {items.map((item) => {
        return (
          <button
            key={item[value]}
            type="button"
            className={getGenreClasses(item, active)}
            onClick={() => onItemSelect(item)}
          >
            {item[text]}
          </button>
        );
      })}
    </div>
  );
};

const getGenreClasses = (genre, activeGenre) => {
  const baseClasses = "list-group-item list-group-item-action";
  return activeGenre._id === genre._id ? baseClasses + " active" : baseClasses;
};

const all = (active, onItemSelect, text, value) => {
  const All = { [text]: "All Genres", [value]: "all" };

  return (
    <button
      key="all"
      type="button"
      className={getGenreClasses(All, active)}
      onClick={() => onItemSelect(All)}
    >
      All
    </button>
  );
};

export default ListGroup;
