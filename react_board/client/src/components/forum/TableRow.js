import React from 'react';
 
const TableRow = ({ children }) => {
  return (
    <tr className="forum-table-row">
      {
        children 
      } 
    </tr>
  )
}
 
export default TableRow;