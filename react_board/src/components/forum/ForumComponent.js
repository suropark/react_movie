import React, { useEffect } from "react";
import { withRouter } from "react-router";
import ForumTable from "./ForumTable";
import TableColumn from "./TableColumn";
import TableRow from "./TableRow";

const ForumComponent = (props) => {
  useEffect(() => {
    // db에서 받아오는게 목표긴 해 ㅇㅇ;;
    console.log("component did mount with useEffect!");
    console.log(`${getContent.title} , ${removeTag(getContent.content)}`);
  }, []);

  const getContent = props.location.state.detail; // edit에서 넘어온 데이터 받기

  console.log(getContent); // { title: , content: }
  console.log(typeof getContent.content);

  const removeTag = (strTag) => {
    return strTag
      .replace(/<br\/>/gi, "\n")
      .replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, "");
  };

  function addTable() {
    return (
      <TableRow>
        <TableColumn>6</TableColumn>
        <TableColumn>{getContent.title}</TableColumn>
        <TableColumn>{removeTag(getContent.content)}</TableColumn>
        <TableColumn>5</TableColumn>
      </TableRow>
    );
  }

  /*  <TableRow>
  <TableColumn>1</TableColumn>  
  <TableColumn>첫번째 게시글입니다.</TableColumn>
  <TableColumn>2021-01-31</TableColumn>
  <TableColumn>6</TableColumn>
</TableRow>   

1 .이거 생산하는 컴포넌트 작성하기
2. 에디터에서 작성하면 게시판에 구현될 수 있게 연결  --> 데이터 받아왔음, 태그도 제거하고., 이제 흠. db랑 연결을 해봐야할 거같은데
*/
const move = () => {
  props.history.push('/edit')
}
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
        <TableRow>
          <TableColumn>5</TableColumn>
          <TableColumn>{getContent.title}</TableColumn>
          <TableColumn>{removeTag(getContent.content)}</TableColumn>
          <TableColumn>4</TableColumn>
        </TableRow>
        {addTable()}
      </ForumTable>
      <button onClick={move}>작성 창</button>
    </>
  );
};

export default withRouter(ForumComponent);
