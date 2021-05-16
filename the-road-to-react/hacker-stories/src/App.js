import {
  useEffect,
  useState,
  useRef,
  useReducer,
  useCallback,
  memo,
} from "react";
import axios from "axios";
import styled from "styled-components";
// import styles from "./App.module.css";

const StyledContainer = styled.div`
  height: 100vw;
  padding: 20px; // this is really cool
  background: #83a4d4;
  background: linear-gradient(to left, #b6fbff, #83a4d4);
  color: #171212;
`;

const StyledHeadlinePrimary = styled.h1`
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 2px;
`;

const useSemiPersistentState = (key, initialState) => {
  const isMounted = useRef(false);

  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  // use it only on update
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      localStorage.setItem(key, value);
    }
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
  console.log("B: app");
  // const initialStories = [
  //   {
  //     title: "React",
  //     url: "https://reactjs.org/",
  //     author: "Jordan Walke",
  //     num_comments: 3,
  //     points: 4,
  //     objectID: 0,
  //   },
  //   {
  //     title: "Redux",
  //     url: "https://redux.js.org/",
  //     author: "Dan Abramov, Andrew Clark",
  //     num_comments: 2,
  //     points: 5,
  //     objectID: 1,
  //   },
  // ];

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");
  const [stories, dispatchStories] = useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

  const handleFetchStories = useCallback(async () => {
    // i think this should be url
    // if (!searchTerm) return;
    dispatchStories({ type: "STORIES_FETCH_INIT" });

    try {
      const result = await axios.get(url);
      dispatchStories({
        type: "STORIES_FETCH_SUCCESS",
        payload: result.data.hits,
      });
    } catch {
      dispatchStories({ type: "STORIES_FETCH_FAILURE" });
    }
  }, [url]);

  useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = useCallback((item) => {
    console.log(item);
    dispatchStories({ type: "REMOVE_STORIES", payload: item });
  }, []);

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
    event.preventDefault();
  };

  // what happen to this ??
  // const searchedStories = stories.data.filter((item) => {
  //   try {
  //     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
  return (
    <StyledContainer>
      <StyledHeadlinePrimary>My Hacker storie</StyledHeadlinePrimary>

      {/* <Search onSearch={handleSearch} search={searchTerm} /> */}

      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />

      <hr />

      {stories.isError && <p>something went wrong</p>}

      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </StyledContainer>
  );
}

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => {
  return (
    <StyledSearchForm onSubmit={onSearchSubmit}>
      <InputWithLable
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLable>
      <StyledButtonLarge type="submit" disabled={!searchTerm}>
        Submit
      </StyledButtonLarge>
    </StyledSearchForm>
  );
};

const StyledLabel = styled.label`
  border-top: 1px solid #171212;
  border-left: 1px solid #171212;
  padding-left: 5px;
  font-size: 24px;
`;
const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #171212;
  background-color: transparent;
  font-size: 24px;
`;

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
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
      &nbsp;
      <StyledInput
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      ></StyledInput>
    </>
  );
};

// const Search = ({ search, onSearch }) => {
//   return (
//     <>
//       <h2>{search}</h2>
//       <label htmlFor="search">Search: </label>
//       <input type="text" id="search" onChange={onSearch} value={search} />
//     </>
//   );
// };

const List = memo(
  ({ list, onRemoveItem }) =>
    console.log("B:List") ||
    list.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))
);

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;
const StyledColumn = styled.span`
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  a {
    color: inherit;
  }
  width: ${(props) => props.width};
`;

const StyledButton = styled.button`
  background: transparent;
  border: 1px solid #171212;
  padding: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover {
    background: #171212;
    color: #ffffff;
  }
`;

const StyledButtonSmall = styled(StyledButton)`
  padding: 5px;
`;
const StyledButtonLarge = styled(StyledButton)`
  padding: 10px;
`;
const StyledSearchForm = styled.form`
  padding: 10px 0 20px 0;
  display: flex;
  align-items: baseline;
`;

const Item = ({ item, onRemoveItem }) => (
  <StyledItem>
    <StyledColumn width="40%">
      <a href={item.url}>{item.title} little</a>
    </StyledColumn>
    <StyledColumn width="30%">{item.author}</StyledColumn>
    <StyledColumn width="10%">{item.num_comments}</StyledColumn>
    <StyledColumn width="10%">{item.points}</StyledColumn>
    <StyledColumn width="10%">
      <StyledButtonSmall type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </StyledButtonSmall>
    </StyledColumn>
  </StyledItem>
);

export default App;
// for testing
export { SearchForm, InputWithLable, List, Item };
