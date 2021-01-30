import React from "react";
import "./ForumComponent.css";

function ForumComponent() {
  const customers = [
    {
      id: 1,
      name: "홍길동",
      birthday: "961222",
    },
    {
      id: 2,
      name: "나동빈",
      birthday: "960508",
    },
  ];
//   const addList = (e) => {
//       return(
//         <td>e.id</td>
//         <td>e.name</td>
//         <td>e.birthday</td>
//       )
//   };

  return (
    <div>
      <div className="board">게시판</div>
      <table>
        <thead>
          <td>글번호</td>
          <td>제목</td>
          <td>등록일</td>
        </thead>
        <tbody>
            {/* {customers.map((e)=>{
                addList(e)
            })} */}
        </tbody>
      </table>
    </div>
  );
}

export default ForumComponent;
