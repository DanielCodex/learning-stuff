import React, { useState } from "react";

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

function App() {
  const [check, setCheck] = useState(true);
  const handleClick = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div>
      {initialTodos.map((item) => {
        return (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                defaultChecked={item.complete}
                onChange={handleClick}
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
