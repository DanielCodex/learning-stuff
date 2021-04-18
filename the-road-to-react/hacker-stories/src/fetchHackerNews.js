import React, { useEffect, useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return <Toggler toggle={toggle} onToggle={handleToggle} />;
}

const Toggler = ({ toggle, onToggle }) => {
  useEffect(() => {
    console.log("i run on every render: mount + update.");
  });
  return (
    <div>
      <button type="button" onClick={onToggle}>
        Toggle
      </button>
      {console.log(toggle)}
      {toggle && <div>Hello react</div>}
    </div>
  );
};

export default App;
