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
        // console.log(item);
        console.log("hell");
        if (item.id === action.id) {
          return { ...item, complete: true };
        } else {
          return item;
        }
      });
    case "undo_todo":
      return state.map((item) => {
        console.log(item.id);
        return item.id === action.id ? { ...item, complete: false } : item;
      });
    default:
      return state;
  }
};

// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case "DO_TODO":
//       return state.map((todo) => {
//         console.log(todo);
//         if (todo.id === action.id) {
//           return { ...todo, complete: true };
//         } else {
//           return todo;
//         }
//       });
//     case "UNDO_TODO":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: false };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };

function App() {
  const [todos, dispatch] = React.useReducer(todoReducer, initialTodos);

  // this bro is a completely different shit
  const handleChange = (todo) => {
    dispatch({
      type: todo.complete ? "undo_todo" : "do_todo",
      id: todo.id,
    });
  };

  return (
    <div>
      {todos.map((item) => {
        return (
          <label>
            <li key={item.id}>
              <input
                // this line and () => handleChange(item) both works?
                type="checkbox"
                checked={item.complete}
                onChange={() => handleChange(item)}
              />
              {item.task}
            </li>
          </label>
        );
      })}
    </div>
  );
}

export default App;
