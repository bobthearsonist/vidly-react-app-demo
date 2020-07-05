import React, { Component } from "react";
import _ from "lodash";

export default class TableHeader extends Component {
  handleSort = (selectedSortColumn, sortOrder, onSort) => {
    console.log("handle sort " + selectedSortColumn.label);

    const orderMap = { asc: true, desc: false };
    const orderLookup = _(orderMap).invert().value();
    const currentOrder = orderMap[sortOrder.order];

    onSort({
      path: selectedSortColumn.path,
      order:
        selectedSortColumn.path === sortOrder.path
          ? orderLookup[!currentOrder]
          : "asc",
    });
  };

  render() {
    const { columns, sortOrder, onSort } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column, index) => {
            const sortable = column.sortable !== false; // TODO substitute for default value
            return (
              <th
                key={column.path || index}
                onClick={
                  sortable === true
                    ? () => this.handleSort(column, sortOrder, onSort)
                    : null
                }
                scope="col"
                style={{ cursor: "pointer" }}
              >
                {column.label}
                {sortable === true ? this.renderSortIcon(column) : null}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }

  renderSortIcon = (column) => {
    const { sortOrder } = this.props;
    const className =
      sortOrder.order === "asc" ? "fa fa-sort-asc" : "fa fa-sort-desc";
    return sortOrder.path === column.path ? (
      <i className={className} aria-hidden="true"></i>
    ) : null;
  };
}
