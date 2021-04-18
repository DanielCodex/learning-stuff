import { useState } from "react";
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

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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

// const List = ({ list }) => {
//   return list.map((item) => {
//     return (
//       <div key={item.objectID}>
//         <span>
//           <a href={item.url}>{item.title}</a>
//         </span>
//         <span>{item.author}</span>
//         <span>{item.num_comments}</span>
//         <span>{item.points}</span>
//       </div>
//     );
//   });
// };

// i think this the most concise way, but i don't think
// everybody are aware about this fearture in JS
const List = ({ list }) =>
  list.map(({ objectID, ...item }) => <Item key={objectID} {...item} />);

const Item = ({ title, url, author, num_comments, points }) => (
  <div>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </div>
);

export default App;
