import userEvent from "@testing-library/user-event";
import React, { useReducer, useState } from "react";

const initialState = { count: 0, age: 23 };
const todoReducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// doing all of this in reducer. it's not always necessary
function App() {
  const [counter, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div>
      <h1>{counter.count}</h1>
      <h1>{counter.age}</h1>
      <button type="button" onClick={() => dispatch({ type: "inc" })}>
        inc
      </button>
      <button type="button" onClick={() => dispatch({ type: "dec" })}>
        inc
      </button>
    </div>
  );
}

export default App;
