import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    let { currentSort } = this.props;

    if (currentSort.path === path) {
      currentSort.order = currentSort.order === "asc" ? "desc" : "asc";
    } else {
      currentSort = { path: path, order: "asc" };
    }

    if (path) this.props.onSort(currentSort);
  };

  renderSortArrow = (item, currentSort) => {
    if (currentSort.path !== item.path) return "";

    return (
      <i
        className={
          currentSort.order === "asc"
            ? "fa fa-arrow-circle-up"
            : "fa fa-arrow-circle-down"
        }
        aria-hidden="true"
      />
    );
  };

  render() {
    const { data, currentSort } = this.props;

    return (
      <thead>
        <tr>
          {data.map((item) => (
            <th
              className="clickable"
              key={item.path || item.key}
              onClick={() => this.raiseSort(item.path)}
            >
              {item.label}
              {this.renderSortArrow(item, currentSort)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
