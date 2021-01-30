import React, { useState } from "react";
import "./EditorComponent.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function EditorComponent() {


  // 입력 버튼 클릭하면 게시판 내역으로 라우팅, 저장




  const [content, setcontent] = useState({ title: "", content: "" });

  const getValue = (e) => {
    const { name, value } = e.target;
    setcontent({
      ...content, [name]: value
    });
    // console.log(content); title 입력
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
          data="<p>ck에디터 입력</p>"
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
      <button className="submit-button">입력</button>
    </div>
  );
}

export default EditorComponent;
