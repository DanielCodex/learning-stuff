import React, { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // we have to remove this event listenet
    // if you don't, even if you delete this App component,
    // you are going to have thie event listener all the time
    // i think this is a really good practice
    // basically this is called clean-up, (we are clearning you know)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return <div>{windowWidth}</div>;
}

export default App;
