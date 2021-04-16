import React, { useState } from "react";

const initialList = [
  "daniel full-stack/data science/ML/hacker",
  "daniel back-end",
];
function Test() {
  const [list, setList] = useState(initialList);

  function handleClick(event) {
    // i don't know why we are using slice in here
    setList(list.slice().reverse());
  }

  return (
    <div>
      <h1>hello there</h1>

      {list.map((item, index) => {
        return (
          <li key={index}>
            <input type="checkbox" />
            <label>{item}</label>
          </li>
        );
      })}
      <button type="submit" onClick={handleClick}>
        reverse me{" "}
      </button>
    </div>
  );
}

export default Test;
