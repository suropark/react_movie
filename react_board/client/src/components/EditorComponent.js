import React, { useState } from "react";
import { reactRouter, withRouter } from "react-router-dom";
import "./EditorComponent.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function EditorComponent(props) {
  // 입력 버튼 클릭하면 게시판 내역으로 라우팅, 저장

  const [content, setcontent] = useState({ title: "", content: "" });

  const getValue = (e) => {
    const { name, value } = e.target;
    setcontent({
      ...content,
      [name]: value,
    });
    // console.log(content); title 입력
  };

  const onSubmitHandler = (event) => {
    props.history.push({ pathname: "/board", state: { detail: content } });
  };

  return (
    <div className="fullbody">
      <div className="form-wrapper">
        <input
          className="title-input"
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
        />
        <CKEditor
          editor={ClassicEditor}
          placeholder="하이"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setcontent({
              ...content,
              content: data,
            });
            // console.log(content); 내용 입력
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
      <button className="submit-button" onClick={onSubmitHandler}>
        입력
      </button>
    </div>
  );
}

export default withRouter(EditorComponent);

// onclick -> onsubmit으로 바꿔야할 듯 ( 서버 연결 하면)
