import React, { useEffect, useRef, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const latestCount = useRef(count);

//   useEffect(() => {
//     latestCount.current = count;
//     setTimeout(() => {
//       console.log(`you clicked ${latestCount.current} times`);
//     }, 1000);
//   });

//   return (
//     <div>
//       <p>you clicked {count} times</p>
//       <button type="button" onClick={() => setCount(count + 1)}>
//         {" "}
//         click me
//       </button>
//       {/* <button onClick={handleAlertClick}>show alert</button> */}
//       <Greeting name="daniel" />
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((x) => x + step);
    }, 1000);
    return () => clearInterval(id);
  }, [step]);

  return (
    <div>
      <h1>{count}</h1>
      <input value={step} onChange={(e) => setStep(Number(e.target.value))} />
      {/* <input value={step} onChange={(e) => setStep(Number(e.target.value))} /> */}
    </div>
  );
}

function Greeting({ name }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // this runs after every render
    document.title = "hello, " + name;
  }, [name]);

  return (
    <div>
      <h1>hellow {name}</h1>
      <button onClick={() => setCounter(counter + 1)}>increemnt</button>
    </div>
  );
}

export default App;
