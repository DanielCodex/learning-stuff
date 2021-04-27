// https://www.robinwieruch.de/react-usereducer-vs-usestate
import React, { useReducer } from "react";

const initState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "inc_or_dec":
      return state + action.by;
    default:
      throw new Error();
  }
};

function App() {
  const [counter, dispatch] = useReducer(counterReducer, initState);
  const incHandle = () => {
    dispatch({ type: "inc_or_dec", by: 1 });
  };
  const decHandle = () => {
    dispatch({ type: "inc_or_dec", by: -1 });
  };
  return (
    <div>
      <h1>{counter.count}</h1>
      <button type="button" onClick={incHandle}>
        +
      </button>
      <button type="button" onClick={decHandle}>
        -
      </button>
    </div>
  );
}

export default App;
