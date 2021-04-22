import React, { useEffect, useRef, useState } from "react";

function App() {
  const hasClickedButton = useRef(true);
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    if (hasClickedButton.current) {
      hasClickedButton.current = false;
    } else {
      console.log(
        `
          I am a useEffect hook's logic
          which runs for a component's
          re-render.
        `
      );
    }
  });

  // console.log("Has clicked button? " + hasClickedButton.current);

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={onClick}>
        increase
      </button>
      <p>{hasClickedButton.current ? "first render" : "re-render"}</p>
    </div>
  );
}

export default App;
