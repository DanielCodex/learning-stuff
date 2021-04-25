import React, { useReducer, useState, useRef } from "react";
import { v4 as uuid4 } from "uuid";

const initialList = [
  {
    id: "a",
    name: "daniel",
  },
  {
    id: "b",
    name: "shahin",
  },
  {
    id: "c",
    name: "mina",
  },
];

function App() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");
  const inputRef = useRef();

  function HandleChange(e) {
    const { value } = e.target;
    setName(value);
  }

  function addItemToList() {
    // damn that's an improvement
    if (!inputRef.current.value) {
      throw new Error("you can't add empty item to the list");
    } else {
      // should we add this logic in here ??
      const addItem = list.concat({
        name: name.replace(/[^a-zA-Z ]/g, ""), // we should learn more about it
        id: uuid4(),
      });
      setName("");
      setList(addItem);
    }
  }

  return (
    <div>
      <h1>welcome to my list</h1>
      <input type="text" value={name} onChange={HandleChange} ref={inputRef} />
      <button type="button" onClick={addItemToList}>
        add item to list
      </button>
      {list.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
}

export default App;
