import React from "react";

const list = [
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
];

function App() {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {" "}
          <span>{item.firstname}</span> <span>{item.lastname}</span>{" "}
          <span>{item.year}</span>
        </li>
      ))}
    </ul>
  );
}

export default App;
