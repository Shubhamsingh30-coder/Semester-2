
import React, { useState } from "react";
import "../App.css";

function InputBox() {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    alert(inputText);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter item"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default InputBox;