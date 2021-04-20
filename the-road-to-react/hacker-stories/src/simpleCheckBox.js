import React, { useReducer, useState } from "react";

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
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "do_todo":
      return state.map((item) => {
        if (item.id === action.id) {
          console.log(item);
          return { ...item, complete: true };
        } else {
          return item;
        }
      });
    case "undo_todo":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, complete: false };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const handleClick = (todo) => {
    dispatch({ type: "do_todo", id: todo.id });
  };
  return (
    <div>
      {todos.map((item) => {
        return (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                defaultChecked={item.complete}
                onClick={() => handleClick(item)}
              />
              {item.task}
            </label>
          </li>
        );
      })}
    </div>
  );
}

export default App;
