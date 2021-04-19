import React, { useEffect, useRef, useState } from "react";

const useEffectOnUpdate = (callback, dependencies) => {
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      callback(dependencies);
    } else {
      didMount.current = true;
    }
  }, [callback, dependencies]);
};

function App() {
  const [toggle, setToggle] = useState(true);

  const handleChange = () => {
    setToggle(!toggle);
  };

  useEffectOnUpdate((dependencies) => {
    console.log(dependencies);
    console.log("i run only if toggle changes");
  });

  return (
    <div>
      <button type="button" onClick={handleChange}>
        toggle
      </button>
      <br />
      <br />
      {toggle && <div>hello react</div>}
    </div>
  );
}

export default App;
