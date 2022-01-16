import React, { Component } from "react";
import _ from "lodash";

export default class TableBody extends Component {
  renderContent = (item, column) => {
    return column.content ? column.content(item) : _.get(item, column.path);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item.key}>
            {columns.map((column) => (
              <td key={item.key + (column.path || column.key)}>
                {this.renderContent(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
