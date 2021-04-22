import React, { useEffect, useState } from "react";
import "./localStorage.css";

function App() {
  const [item, setItem] = useState(localStorage.getItem("Search") || "react");

  // this bro is out of control, we should be carefull
  useEffect(() => {
    localStorage.setItem("Search", item);
  }, [item]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div>
      <h1>{item}</h1>
      <input type="text" value={item} onChange={handleChange} />
      <h1>hello world</h1>
    </div>
  );
}

export default App;
