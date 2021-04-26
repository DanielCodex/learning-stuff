import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(username);
    setUsername("");
    event.preventDefault();
  };

  return (
    <div>
      <h1>hello world</h1>
      <form onSubmit={handleSubmit}>
        <label>
          your name:
          <input type="text" value={username} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default App;
