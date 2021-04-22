import React, { useReducer } from "react";

const intitalState = {
  count: 0,
  name: "daniel",
  lastname: "hemmati",
  interest: "can you see that",
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(counterReducer, intitalState);

  return (
    <div>
      <h1>{data.count}</h1>
      <ul>
        <li>{data.name}</li>
        <li>{data.lastname}</li>
        <li>{data.interest}</li>
      </ul>
      <button type="button" onClick={() => dispatch({ type: "inc" })}>
        inc
      </button>
      <button type="button" onClick={() => dispatch({ type: "dec" })}>
        dec
      </button>
    </div>
  );
}

export default App;
