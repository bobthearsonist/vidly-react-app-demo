import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
  const { columns, sortOrder, onSort, data } = props;
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortOrder={sortOrder}
        onSort={onSort}
      ></TableHeader>
      <TableBody data={data} columns={columns}></TableBody>
    </table>
  );
};

export default Table;
