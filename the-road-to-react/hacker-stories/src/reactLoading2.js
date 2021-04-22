import React, { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setInterval(() => {
      // after 6 sec you will see the message
      setIsLoading(true);
    }, 6000);
  });
  console.log(isLoading);
  return (
    <div>
      {isLoading === false ? <div>Loading ... </div> : <h1>hello ther</h1>}
    </div>
  );
}

export default App;
