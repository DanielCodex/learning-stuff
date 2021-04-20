import React, { useReducer, useState } from "react";

const initialState = { count: 0, age: 23 };

const countReducer = (state, action) => {
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
  const [state, dispatch] = useReducer(countReducer, initialState);
  const increaseValue = () => {
    dispatch({ type: "inc" });
    // setCount(count + 1);
  };
  const decreaseValue = () => {
    dispatch({ type: "dec" });
    // setCount(count - 1);
  };
  return (
    <div>
      <h1>{state.count}</h1>
      <h2>{state.age}</h2>
      <button type="button" onClick={increaseValue}>
        increase
      </button>
      <button type="button" onClick={decreaseValue}>
        decrease
      </button>
    </div>
  );
}

export default App;
