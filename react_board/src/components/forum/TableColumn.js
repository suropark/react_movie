import React from 'react';
 
const TableColumn = ({ children }) => {
  return (
    <td className="forum-table-column">
      {
        children // <TableColumn> children </TableColumn> 
      }
    </td>
  )
}
 
export default TableColumn;