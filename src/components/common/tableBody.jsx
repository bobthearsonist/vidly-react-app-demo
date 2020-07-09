import React, { Component } from "react";
import _ from "lodash";

export default class TableBody extends Component {
  render() {
    const { data, columns, rowKey } = this.props;
    return (
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item[rowKey]}>
              {columns.map((column, index) => (
                <td key={item[rowKey] + ":" + column.path || index}>
                  {this.renderCell(column, item)}
                </td>
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

TableBody.defaultProps = {
  rowKey: "_id",
};
