import React, { useReducer } from "react";

const initialState = { count: 0, age: 23 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(dispatch);

  return (
    <div>
      <h1>{state.count}</h1>
      <br />
      <h2>{state.age}</h2>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        increase
      </button>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        decrease
      </button>
    </div>
  );
}

export default App;
