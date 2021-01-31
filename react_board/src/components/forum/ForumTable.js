import React from "react";
import "./ForumTable.css";

const ForumTable = (props) => {
  const { headersName, children } = props;

  return (
    <table className="forum-table">
      <thead>
        <tr>
          {headersName.map((item, index) => {
            return (
              <td className="forum-table-header-column" key={index}>
                {item}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default ForumTable;
