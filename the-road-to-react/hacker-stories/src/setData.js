import React, { useReducer, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [click, setClick] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    setClick(query);
  };

  return (
    <div>
      <h1>{click}</h1>
      <input
        type="text"
        placeholder="someone"
        value={query}
        onChange={handleChange}
      />
      <button type="button" onClick={handleClick}>
        click me
      </button>
    </div>
  );
}

export default App;
