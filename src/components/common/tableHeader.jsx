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

  render() {
    const { data } = this.props;

    return (
      <thead>
        <tr>
          {data.map((item) => (
            <th
              key={item.path || item.key}
              onClick={() => this.raiseSort(item.path)}
            >
              {item.text}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
