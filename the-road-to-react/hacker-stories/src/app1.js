import React, { useState } from "react";

function Hello() {
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

  // one state which is going to be used in both Search and List component
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const SearchStories = stories.filter((item) => {
    // searchTerm witll be update via setSearchTerm, so we want to filter the value we have right now
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>hello world</h1>
      {/* showType is just for me */}
      <Search onSearch={handleChange} showType={searchTerm} />
      <List list={SearchStories} />
    </div>
  );
}

const Search = (props) => {
  return (
    <>
      <h3>{props.showType}</h3>
      <label htmlFor="serach">Search: </label>
      <input type="text" id="search" onChange={props.onSearch} />
      <br />
      <br />
    </>
  );
};

const List = ({ list }) => {
  // here we are mapping through the filter item
  return list.map((item) => {
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.point}</span>
        <span>{item.num_comments}</span>
      </div>
    );
  });
};

export default Hello;
