import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

export default function Table({
  currentSort,
  onSort,
  onDelete,
  onLike,
  data,
  columns,
}) {
  return (
    <table className="table">
      <TableHeader onSort={onSort} currentSort={currentSort} data={columns} />
      <TableBody
        data={data}
        columns={columns}
        onDelete={(id) => onDelete(id)}
        onLike={(id) => onLike(id)}
      />
    </table>
  );
}
