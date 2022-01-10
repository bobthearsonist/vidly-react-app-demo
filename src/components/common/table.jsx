import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortOrder, onSort, data }) => {
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
