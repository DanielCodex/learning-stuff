import React, { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, []);

  return <div>{isLoading ? <p>Hello there</p> : <h2>Loading...</h2>}</div>;
}

export default App;
