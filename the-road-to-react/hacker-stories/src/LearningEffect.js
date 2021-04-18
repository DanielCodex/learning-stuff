import React, { useEffect, useState } from "react";

function LifeCycleDemo() {
  useEffect(() => {
    console.log("render");

    return () => console.log("unmounting ...");
  });

  return "Im a lifecycle demo...";
}

function App() {
  const [random, setRandom] = useState(Math.random());

  const [mounted, setMounted] = useState(true);

  const reRender = () => setRandom(Math.random());
  const toggle = () => setMounted(!mounted);

  return (
    <>
      <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}>show/hide LifeCycleDemo</button>
      {mounted && <LifeCycleDemo />}
    </>
  );
}

export default App;
