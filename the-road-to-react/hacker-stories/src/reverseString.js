import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [reverse, setReverse] = useState("");

  const handleChange = (e) => {
    setText([...e.target.value].reverse().join(""));
  };

  const handleClick = () => {
    setReverse(text);
  };

  return (
    <div>
      <h1>{reverse}</h1>
      <label htmlFor="type">Type: </label>
      <input type="text" onChange={handleChange} id="type" />
      <button type="button" onClick={handleClick}>
        reverseMe
      </button>
    </div>
  );
}

export default App;
