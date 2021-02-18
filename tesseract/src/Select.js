import React, { useState } from "react";
import { createWorker } from "tesseract.js";

function Select() {
  const [lang, setLang] = useState("eng");
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("")
  const clickHandler = () => {
    console.log("clicked");
    console.log(lang);
  };
  const selectHandler = (e) => {
    console.log("q");
    setLang(e.target.value);
    console.log(lang);
  };

  const changeHandler = (event) => {
    setUrl(event.target.value);
    console.log(lang);
    console.log(typeof url);
  };

  const generateQuestion = () => {
    let dividedText = text.split(" ");  // 1. 문자열 분리해 배열로
    console.log(dividedText);   
    console.log(dividedText.length);
    let randomNum = Math.floor(Math.random() * dividedText.length); // 단어 개수만큼 난수 생성
    setAnswer(dividedText[randomNum]); // 한자리 빈칸의 정답
    console.log(answer)
    dividedText[randomNum] = "___";  // 한자리 빈칸으로 만듬
    setQuestion(dividedText.join(" "));  // 배열을 빈칸있는 문자열로 변경 ->ㄴㅇㅌㅊㅋ 
    console.log(question)
  };

  const imageToWord = (e) => {
    const worker = createWorker({
      logger: (m) => console.log(m),
    });

    (async () => {
      await worker.load();
      await worker.loadLanguage(lang);
      await worker.initialize(lang);
      const {
        data: { text },
      } = await worker.recognize(
        // "https://tesseract.projectnaptha.com/img/eng_bw.png"
        url
      );
      console.log(text);
      console.log(lang);
      await worker.terminate();
      setText(text);
    })();


  };
  return (
    <div>
      <h3> 언어 선택</h3>
      <label> choose: </label>
      <select onChange={selectHandler}>
        <option value="eng">ENG</option>
        <option value="kor">KOR</option>
        <option value="swe">SWE</option>
      </select>
      <button onClick={clickHandler}>현재 선택은?</button>

      <input
        style={{ marginLeft: "100px", minWidth: "300px" }}
        placeholder="이미지 URL"
        value={url}
        onChange={changeHandler}
      />
      <button onClick={imageToWord}>문자 변환</button>

      <div style={{ marginTop: "100px", display: "flex" }}>
        <img src={url} style={{ maxWidth: "800px" }} />
        <span style={{ maxWidth: "800px" }}>
          <h3>{text}</h3>
        </span>
      </div>
      <div>
        <button onClick={generateQuestion}> 문제 만들기 </button>
      </div>
    </div>
  );
}

export default Select;
