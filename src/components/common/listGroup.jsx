/* eslint-disable no-lone-blocks */
import React, { Component } from "react";

export default class ListGroup extends Component {
  render() {
    const { items, onItemSelect, text, value } = this.props;
    return (
      <div>
        {items.map((item) => {
          return (
            <button
              key={item[value]}
              type="button"
              className={this.getGenreClasses(item)}
              onClick={() => onItemSelect(item)}
            >
              {item[text]}
            </button>
          );
        })}
      </div>
    );
  }

  getGenreClasses(item) {
    const { value, selectedItem: active } = this.props;
    const baseClasses = "list-group-item list-group-item-action";
    return active[value] === item[value]
      ? baseClasses + " active"
      : baseClasses;
  }
}

ListGroup.defaultProps = {
  text: "name",
  value: "_id",
};
