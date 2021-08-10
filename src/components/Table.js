import React from "react";

export function TableCell({ type = "td", value }) {
  return type === "th" ? <th>{value}</th> : <td>{value}</td>;
}

export function TableRow({ fields, row }) {
  return (
    <tr style={{ border: "2px solid #234567" }}>
      {(fields || Object.keys(row)).map((field, index) => (
        <TableCell value={row[field]} key={index} />
      ))}
    </tr>
  );
}

export default function Table({ columns, data }) {
  return (
    <table>
      <thead>
        {columns.map(({ label, field }, index) => (
          <TableCell type="th" value={label || field} key={index} />
        ))}
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow row={row} key={index} />
        ))}
      </tbody>
    </table>
  );
}
