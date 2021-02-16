import React, { useState } from "react";
import Tes from "./Tes"

function Select() {
  const [lang, setLang] = useState("eng");

  const clickHandler = () => {
    console.log("clicked");
    console.log(lang);
  };
  const selectHandler = (e) => {
    console.log("q");
    setLang(e.target.value);
    console.log(lang);
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
      <Tes lang={lang} />
    </div>
  );
}

export default Select;
