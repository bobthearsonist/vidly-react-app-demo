/* eslint-disable no-lone-blocks */
import React, { Component } from "react";

export default class ListGroup extends Component {
  get active() {
    const { currentItem: active } = this.props;
    return active !== undefined ? active : this.defaultAll();
  }

  render() {
    const { items, onItemSelect, text, value, hasAll } = this.props;
    return (
      <div>
        {hasAll ? this.all() : null}

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
    const { value } = this.props;
    const baseClasses = "list-group-item list-group-item-action";
    return this.active[value] === item[value]
      ? baseClasses + " active"
      : baseClasses;
  }

  defaultAll() {
    return {
      [this.props.text]: "All Genres",
      [this.props.value]: "all",
    };
  }

  all() {
    const { onItemSelect } = this.props;
    return (
      <button
        key="all"
        type="button"
        className={this.getGenreClasses(this.defaultAll())}
        onClick={() => onItemSelect(this.defaultAll())}
      >
        All
      </button>
    );
  }
}

ListGroup.defaultProps = {
  text: "name",
  value: "_id",
  hasAll: true,
};
