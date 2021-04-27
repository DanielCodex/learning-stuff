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
  {
    id: "c",
    task: "Learn figma",
    complete: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "do_todo":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case "undo_todo":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case "remove_todo":
      return state.filter((todo) => {
        return todo.id !== action.id;
      });
    default:
      return state;
  }
};

function App() {
  const [todos, dipatch] = useReducer(todoReducer, initialTodos);

  const handleChange = (todo) => {
    dipatch({ type: todo.complete ? "undo_todo" : "do_todo", id: todo.id });
  };

  const removeItem = (todo) => {
    // you can pass anything for todo, which we are passing todo.id in line 73
    dipatch({ type: "remove_todo", id: todo });
  };

  return (
    <div>
      <h1>hello world</h1>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChange(todo)}
              />
              {todo.task}
              <button onClick={() => removeItem(todo.id)}>removeItem</button>
            </label>
          </li>
        );
      })}
    </div>
  );
}

export default App;
