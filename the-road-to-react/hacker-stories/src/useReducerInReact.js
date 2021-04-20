import React, { useReducer } from "react";

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
    default:
      return state;
  }
};

function App() {
  // \todo is the first step
  const [todo, dispatch] = useReducer(todoReducer, initialTodos);

  const handleChange = (todo) => {
    dispatch({ type: todo.complete ? "UNDO_TODO" : "DO_TODO", id: todo.id });
  };

  return (
    <div>
      {todo.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChange(todo)}
              />
              {todo.task}
            </label>
          </li>
        );
      })}
    </div>
  );
}

export default App;
