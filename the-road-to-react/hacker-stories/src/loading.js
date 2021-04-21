import React, { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <div>
      {isLoading === false ? <h1>hello world</h1> : <h1>Loading ....</h1>}
    </div>
  );
}

export default App;
