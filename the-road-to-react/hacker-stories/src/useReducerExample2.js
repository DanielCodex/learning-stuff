import React, { useReducer } from "react";
// learn more about useReducer
// https://daveceddia.com/usereducer-hook-examples/
// really good react focus hooks (homemade LOL)

const initialState = [];

const todoReducer = (state, action) => {};

function App() {
  // const [todo, dispatch] =
  const [sum, dispatch] = useReducer((state, action) => {
    console.log(action);
    return state + action;
  }, 0);
  return (
    <div>
      {sum}
      <button type="button" onClick={() => dispatch(1)}>
        click
      </button>
    </div>
  );
}

export default App;
