import React from "react";
import _ from "lodash";

export default function TableBody({ data, columns }) {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.key}>
          {columns.map((column) => (
            <td key={item.key + (column.path || column.key)}>
              {column.content ? column.content(item) : _.get(item, column.path)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
