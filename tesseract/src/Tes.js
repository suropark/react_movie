import React, { useState } from "react";
import { createWorker } from "tesseract.js";

function Tes({ lang }) {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("1")
  const changeHandler = (event) => {
    setUrl(event.target.value);
    console.log(lang)
  };
  
  const clickHandler = (e) => {
    e.preventDefault();
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
      setText(text)
      
    })();
    
    
  };

  return (
    <div>
      <input placeholder="이미지 URL" value={url} onChange={changeHandler} />
      <button onClick={clickHandler}>이미지 문자 변환</button>
      <h4>{text}</h4>
    </div>
  );
}

export default Tes;
