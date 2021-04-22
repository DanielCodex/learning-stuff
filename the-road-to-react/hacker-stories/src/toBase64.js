import React, { useState } from "react";

function App() {
  const [cipher, setCipher] = useState("");
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setCipher(btoa(e.target.value));
  };

  const handleClick = () => {
    setQuery(cipher);
  };

  return (
    <div>
      <h1>{query}</h1>
      <input type="text" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        cipher me
      </button>
    </div>
  );
}

export default App;
