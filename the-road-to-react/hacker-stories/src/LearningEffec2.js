import React, { useEffect, useState } from "react";

function App() {
  const [resourceType, setReourceType] = useState("posts");
  const [items, setItem] = useState([]);

  console.log("rendering app component");

  useEffect(() => {
    console.log("resourceType changed");
    // this will run first
    // first clean up then run what we have at top
    return () => {
      // unmount part
      console.log("return from resource changed");
    };
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setReourceType("posts")}>Posts</button>
        <button onClick={() => setReourceType("users")}>Users</button>
        <button onClick={() => setReourceType("comments")}>comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default App;
