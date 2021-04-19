import React, { useEffect, useRef, useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setTimeout(
      () => setTimer((currentTimer) => currentTimer + 1),
      1000
    );
    return () => clearInterval(interval);
  }, [timer]);
  return <div>{timer}</div>;
}

const Toggler = ({ toggle, onToggle }) => {
  const [title, setTitle] = useState("Hello react");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  // we can use, useRef to run useEffect whenever some update happened
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      return;
    }

    if (toggle === false) {
      console.log("i run only once if toggle is false.");
      didMount.current = true;
    }
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
