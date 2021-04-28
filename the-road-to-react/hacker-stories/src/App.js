import { useEffect, useState, useRef, useReducer, useCallback } from "react";
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
    case "STORIES_FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "STORIES_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "STORIES_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case "REMOVE_STORIES":
      return {
        ...state,
        data: state.data.filter((story) => {
          return action.payload.objectID !== story.objectID;
        }),
      };
    default:
      throw new Error();
  }
};

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";
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

  // with this code you will get nothing as a result. it's good for testing
  // const getAsyncStories = () =>
  //   new Promise((resolve, reject) => setTimeout(reject, 2000));

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");
  const [stories, dispatchStories] = useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

  // what does this do??
  const handleFetchStories = useCallback(() => {
    if (!searchTerm) return;
    dispatchStories({ type: "STORIES_FETCH_INIT" });

    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        dispatchStories({
          type: "STORIES_FETCH_SUCCESS",
          payload: res.hits,
        });
      })
      .catch(() => dispatchStories({ type: "STORIES_FETCH_FAILURE" }));
  }, [url]);

  useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = (item) => {
    console.log(item);
    dispatchStories({ type: "REMOVE_STORIES", payload: item });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
  };

  // what happen to this ??
  const searchedStories = stories.data.filter((item) => {
    try {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div className="App">
      <h1>My hacker stories</h1>

      <Search onSearch={handleSearch} search={searchTerm} />
      <InputWithLable
        id="search"
        value={searchTerm}
        onInputChange={handleSearchInput}
        isFocused
      >
        <strong>2Search:</strong>
      </InputWithLable>

      <button type="button" onClick={handleSearchSubmit} disabled={!searchTerm}>
        Submit
      </button>

      <hr />

      {stories.isError && <p>something went wrong</p>}

      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
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
