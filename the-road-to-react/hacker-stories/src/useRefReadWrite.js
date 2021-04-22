import React, { useEffect, useRef, useState } from "react";

function App() {
  const [text, setText] = useState("some text...");

  function handleChange(event) {
    setText(event.target.value);
  }

  // but we can write this with useEffect i thinkh
  const ref = (node) => {
    if (!node) return;

    const { width } = node.getBoundingClientRect();

    if (width >= 150) {
      node.style.color = "red";
    } else {
      node.style.color = "blue";
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <div>
        <span ref={ref}>{text}</span>
      </div>
    </div>
  );
}

export default App;
