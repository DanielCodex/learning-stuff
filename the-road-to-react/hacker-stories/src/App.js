import { useEffect, useState, useRef, useReducer } from "react";
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

const storiesReducer = (state, action) => {
  switch (action.type) {
    case "SET_STORIES":
      return action.payload;
    case "REMOVE_STORIES":
      return state.filter(
        (story) => action.payload.objectID !== story.objectID
      );
    default:
      throw new Error();
  }
};

function App() {
  const initialStories = [
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

  const getAsyncStories = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ data: { stories: initialStories } }), 2000)
    );

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");
  const [stories, dispatchStories] = useReducer(storiesReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getAsyncStories()
      .then((res) => {
        dispatchStories({ type: "SET_STORIES", payload: res.data.stories });
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);

  const handleRemoveStory = (item) => {
    console.log(item);
    dispatchStories({ type: "REMOVE_STORIES", payload: item });
    // const newStoies = stories.filter(
    //   (story) => story.objectID !== item.objectID
    // );
    // dispatchStories({ type: "SET_STORIES", payload: newStoies });
  };

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
        isFocused
      >
        {/* this is sick  */}
        <strong>2Search:</strong>
      </InputWithLable>

      <hr />

      {isError && <p>something went wrong</p>}

      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      )}
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
  isFocused,
}) => {
  // i like this, but does it have any drawback?
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        onChange={onInputChange}
        autoFocus={isFocused}
      />
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

const List = ({ list, onRemoveItem }) =>
  list.map((item) => (
    <Item key={item.objectID} onRemoveItem={onRemoveItem} item={item} />
  ));

const Item = ({ item, onRemoveItem }) => {
  const handleRemove = () => {
    onRemoveItem(item);
  };
  return (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button type="button" onClick={handleRemove}>
          Dismiss
        </button>
      </span>
    </div>
  );
};

export default App;
