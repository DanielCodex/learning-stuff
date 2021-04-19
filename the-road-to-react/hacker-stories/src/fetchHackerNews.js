import React, { useEffect, useRef, useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Toggler toggle={toggle} onToggle={handleToggle} />
    </div>
  );
}

const Toggler = ({ toggle, onToggle }) => {
  const [title, setTitle] = useState("Hello react");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  // if you want to control what to render when you want, you
  useEffect(() => {
    // this function will be render on every render
    console.log("i run only if toggle changes (and on mount)");
    // now this part makes sense
  }, [toggle]);

  return (
    <div>
      <input type="text" value={title} onChange={handleChange} />
      <br />
      <button type="button" onClick={onToggle}>
        Toggle
      </button>
      {toggle && <div>{title}</div>}
    </div>
  );
};

export default App;
