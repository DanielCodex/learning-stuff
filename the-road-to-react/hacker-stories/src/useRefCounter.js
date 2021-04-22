import React, { useEffect, useRef, useState } from "react";

function App() {
  // const [counter, setCounter] = useState(0);
  // function handleClick() {
  //   setCounter(counter + 1);
  // }

  // it's like we are using jquery again
  // this is really interesting
  const ref = useRef();

  useEffect(() => {
    ref.current.textContent = 0;
  }, []);

  function handleClick() {
    ref.current.textContent = Number(ref.current.textContent) + 1;
  }

  return (
    <div>
      <div>
        <span ref={ref} />
      </div>
      <button type="button" onClick={handleClick}>
        inc
      </button>
      {/* <h1>{counter}</h1>
      <button type="button" onClick={handleClick}>
        inc
      </button> */}
    </div>
  );
}

export default App;
