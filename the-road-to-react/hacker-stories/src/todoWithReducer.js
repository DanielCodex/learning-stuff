import React, { useReducer, useState } from "react";
import { v4 as uuid4 } from "uuid";

const initialTodos = [
  {
    id: "a",
    task: "Learn React",
    complete: false,
  },
  {
    id: "b",
    task: "Learn Firebase",
    complete: false,
  },
  {
    id: "c",
    task: "Learn figma",
    complete: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "DO_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case "UNDO_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case "ADD_TODO":
      return state.concat({
        task: action.task,
        id: action.id,
        complete: false,
      });
    default:
      throw new Error();
  }
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [text, setText] = useState("");
  function handleClick(e) {
    // text comes from the input chaange
    dispatch({ type: "ADD_TODO", task: text, id: uuid4() });
  }

  return (
    <div>
      <h1>hello world</h1>
      {/* i don't know if there is other way for this or not */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        add item
      </button>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>{todo.task}</label>
          </li>
        );
      })}
    </div>
  );
}

export default App;
