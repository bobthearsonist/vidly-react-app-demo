import React, { Component } from "react";
import _ from "lodash";

export default class TableHeader extends Component {
  handleSort = (selectedSortColumn, currentSortOrder, onSort) => {
    console.log("handle sort " + selectedSortColumn.label);

    const orderMap = { asc: true, desc: false };
    const orderLookup = _(orderMap).invert().value();
    const currentOrder = orderMap[currentSortOrder.order];

    onSort({
      path: selectedSortColumn.path,
      order:
        selectedSortColumn.path === currentSortOrder.path
          ? orderLookup[!currentOrder]
          : "asc",
    });
  };

  render() {
    const { columns, sortOrder, onSort } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.label}
              onClick={
                column.sortable === true || column.sortable === undefined // TODO substitute for default value
                  ? () => this.handleSort(column, sortOrder, onSort)
                  : null
              }
              scope="col"
            >
              {column.hideLabel ? null : column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
