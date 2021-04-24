import React, { useState } from "react";

const stories = [
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

function App() {
  const [list, removeList] = useState(stories);

  const handleClick = (id) => {
    console.log(id);
    const newList = list.filter((item) => item.objectID !== id);
    removeList(newList);
  };

  return (
    <div>
      <h1>hello world</h1>
      {list.map((item, index) => {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <button type="button" onClick={() => handleClick(item.objectID)}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
