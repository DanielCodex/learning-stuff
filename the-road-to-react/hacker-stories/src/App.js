import { useEffect, useState } from "react";
import "./App.css";

function App() {
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

  // good shit
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || "React"
  );

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // localStorage.setItem("search", event.target.value);
  };

  const searchedStories = stories.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className="App">
      <h1>hello there</h1>

      <Search onSearch={handleSearch} search={searchTerm} />

      <hr />
      <List list={searchedStories} />
    </div>
  );
}

const Search = ({ search, onSearch }) => {
  return (
    <div>
      <h2>{search}</h2>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={onSearch} value={search} />
    </div>
  );
};

const List = ({ list }) =>
  list.map((item) => <Item key={item.objectID} item={item} />);

const Item = ({ item }) => (
  <div key={item.objectID}>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
);

export default App;
