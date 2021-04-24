import { useEffect, useState } from "react";
import "./App.css";

// this is where everthing will get more fun
const useSemiPersistentState = (key, initialState) => {
  // good shit
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

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

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className="App">
      <h1>My hacker stories</h1>

      <Search onSearch={handleSearch} search={searchTerm} />
      <InputWithLable
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        {/* this is sick  */}
        <strong>2Search:</strong>
      </InputWithLable>

      <hr />
      <List list={searchedStories} />
    </div>
  );
}

// that default part is really nice
const InputWithLable = ({
  id,
  value,
  type = "text",
  children,
  onInputChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input type={type} id={id} value={value} onChange={onInputChange} />
    </>
  );
};

const Search = ({ search, onSearch }) => {
  return (
    <>
      <h2>{search}</h2>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={onSearch} value={search} />
    </>
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
