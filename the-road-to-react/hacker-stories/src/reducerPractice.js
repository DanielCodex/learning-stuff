import React, { useEffect, useReducer, useRef, useState } from "react";

function App() {
  const inputRef = useRef();
  const [item, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [...state, { id: state.length, name: action.name }];
      case "remove":
        return state.filter((_, index) => index !== action.index);
      case "reset":
        return [];
      default:
        return state;
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: "add", name: inputRef.current.value });
    inputRef.current.value = "";
  }

  return (
    <div>
      {/* why this will just take the function like this?
        why not it's like: () => dispatch({type: "reset"}) 
      */}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="button" onClick={() => dispatch({ type: "reset" })}>
          reset
        </button>
      </form>
      <ul>
        {item.map((item, index) => {
          console.log(item);
          return (
            <li key={item.id}>
              {item.name}{" "}
              <button
                type="button"
                onClick={() => dispatch({ type: "remove", index })}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
