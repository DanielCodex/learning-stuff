import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [click, setClick] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (event) => {
    setClick([...text].reverse().join("")); // it does matter where you do this
    event.preventDefault();
  };

  const reset = () => {
    setText("");
    setClick("");
  };

  return (
    <div>
      <h1>{click}</h1>

      <input type="text" value={text} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        reverseme
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </div>
  );
}

export default App;
