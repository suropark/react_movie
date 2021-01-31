import React from "react";
import ForumTable from "./ForumTable";
import TableColumn from "./TableColumn";
import TableRow from "./TableRow";

const ForumComponent = (props) => {

/*  <TableRow>
  <TableColumn>1</TableColumn>
  <TableColumn>첫번째 게시글입니다.</TableColumn>
  <TableColumn>2021-01-31</TableColumn>
  <TableColumn>6</TableColumn>
</TableRow>   

1 .이거 생산하는 컴포넌트 작성하기
2. 에디터에서 작성하면 게시판에 구현될 수 있게 연결

*/



  return (
    <>
      <ForumTable headersName={["글번호", "제목", "등록일", "조회수"]}>
        <TableRow>
          <TableColumn>1</TableColumn>
          <TableColumn>첫번째 게시글입니다.</TableColumn>
          <TableColumn>2021-01-31</TableColumn>
          <TableColumn>6</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>2</TableColumn>
          <TableColumn>두번째 게시글입니다.</TableColumn>
          <TableColumn>2021-01-31</TableColumn>
          <TableColumn>5</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>3</TableColumn>
          <TableColumn>세번째 게시글입니다.</TableColumn>
          <TableColumn>2021-01-31</TableColumn>
          <TableColumn>1</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>4</TableColumn>
          <TableColumn>네번째 게시글입니다.</TableColumn>
          <TableColumn>2021-01-31</TableColumn>
          <TableColumn>2</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>5</TableColumn>
          <TableColumn>다섯번째 게시글입니다.</TableColumn>
          <TableColumn>2021-01-31</TableColumn>
          <TableColumn>4</TableColumn>
        </TableRow>
      </ForumTable>
    </>
  );
};

export default ForumComponent;
