import React, { Component } from "react";
import _ from "lodash";

export default class TableBody extends Component {
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              {columns.map((column, index) => (
                <td key={index}>{this.renderCell(column, item)}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    );
  }

  renderCell(column, item) {
    return column.content ? column.content(item) : _.get(item, column.path);
  }
}
