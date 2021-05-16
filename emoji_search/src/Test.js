import React, { useState } from "react";

const testList = [
  { name: "daniel", age: 23, coding: true },
  { name: "idk", age: 2000, coding: false },
  { name: "god", age: 2000, coding: true },
];
function App() {
  // const [list, setList] = useState(testList);
  const [text, setText] = useState("");
  const [click, setClick] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    console.log("i got click");
    setClick(text);
  };

  // here we go
  const list = !text
    ? testList
    : testList.filter((item) =>
        item.name.toLowerCase().includes(click.toLowerCase())
      );

  return (
    <div>
      <h1>{click}</h1>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit" onClick={handleClick}>
        click
      </button>
      {list.map((item, index) => {
        return (
          <ul>
            <li key={index}>{item.name}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
