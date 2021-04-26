import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";

const initialList = [
  {
    id: "a",
    firstname: "danile",
    lastname: "hemmati",
    year: 1997,
  },
  {
    id: "b",
    firstname: "shahin",
    lastname: "hemmati",
    year: 1990,
  },
  {
    id: "c",
    firstname: "mina",
    lastname: "sabzian",
    year: 2000,
  },
];

function App() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (index) => {
    const removeItem = list.filter((item) => item.id !== index);
    setList(removeItem);
  };

  const addItem = (foo) => {
    // const newItem = list.concat({ firstname: name });
    // console.log(name);
    let splitName = name.split(" ");
    setList(
      list.concat({
        id: uuid4(),
        firstname: splitName[0],
        lastname: splitName[1],
        year: splitName[2],
      })
    );
  };

  return (
    <ul>
      {/* <h1>{name}</h1> */}
      <input type="text" value={name} onChange={handleChange} />
      <button type="button" onClick={addItem}>
        add new item
      </button>
      {list.map((item) => (
        <li key={item.id}>
          {" "}
          <span>{item.firstname}</span> <span>{item.lastname}</span>{" "}
          <span>{item.year}</span>
          <button type="button" onClick={() => handleClick(item.id)}>
            remove Item
          </button>
        </li>
      ))}
    </ul>
  );
}

export default App;
