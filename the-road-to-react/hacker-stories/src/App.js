// import logo from "./logo.svg"; // import { useState } from "react";
import { useState } from "react";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const initialList = ["Learn React", "Learn GraphQL"];
function App() {
  const [list, setList] = useState(initialList);

  const handleClick = (event) => {
    setList(list.slice().reverse());
  };

  return (
    <div className="App">
      <h1>hello there</h1>

      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />

      <hr />
      {list.map((item, index) => {
        return (
          <li key={index}>
            <label>
              <input type="checkbox" />
              {item}
            </label>
          </li>
        );
      })}
      <button type="button" onClick={handleClick}>
        reverse list
      </button>
    </div>
  );
}

export default App;
