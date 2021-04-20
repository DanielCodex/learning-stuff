import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={handleIncrease}>
        increase
      </button>
      <button type="button" onClick={handleDecrease}>
        decrease
      </button>
    </div>
  );
}

export default App;
