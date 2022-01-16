import React from "react";

const ListGroup = (props) => {
  const { onItemSelect, selectedItem, items, textProperty, valueProperty } =
    props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <button
          key={item[valueProperty]}
          type="button"
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
        >
          {item[textProperty]}
        </button>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
