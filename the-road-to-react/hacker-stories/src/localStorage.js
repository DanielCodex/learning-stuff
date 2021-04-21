import React, { useState } from "react";
import "./localStorage.css";

function App() {
  const [query, setQuery] = useState(localStorage.getItem("search") || "react");

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    localStorage.setItem("search", value);
  };

  return (
    <div className="test">
      <h1>{query}</h1>
      <label htmlFor="write">write: </label>
      <input
        type="text"
        placeholder="write"
        value={query}
        onChange={handleChange}
        id="write"
      />
    </div>
  );
}

export default App;
