import React, { useState } from "react";

function Foo() {
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
      title: "expressjs",
      url: "https://expressjs.org/",
      author: "TJ",
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

  const [searchTerm, setSearchTerm] = useState("react");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const SearchStories = stories.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>hello there</h1>
      <Search onSearch={handleSearch} search={searchTerm} />
      <hr />
      <List list={SearchStories} />
    </div>
  );
}

const Search = ({ onSearch, search }) => {
  return (
    <>
      <h2>{search}</h2>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={onSearch} value={search} />
    </>
  );
};

const List = ({ list }) => {
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

export default Foo;
