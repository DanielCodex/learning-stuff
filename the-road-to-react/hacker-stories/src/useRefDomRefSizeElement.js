import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [text, setText] = useState("some text ...");

  function handleOnChange(event) {
    setText(event.target.value);
  }

  // const ref = useRef();

  const ref = React.useCallback(
    (node) => {
      if (!node) return;

      const { width } = node.getBoundingClientRect();

      document.title = `Width:${width}`;
    },
    [text]
  );

  // useEffect(() => {
  //   const { width } = ref.current.getBoundingClientRect();
  //   document.title = `Width:${width}`;
  // }, [text]);

  return (
    <div>
      <input type="text" value={text} onChange={handleOnChange} />
      <div>
        <span ref={ref}>{text}</span>
      </div>
    </div>
  );
}

export default App;
