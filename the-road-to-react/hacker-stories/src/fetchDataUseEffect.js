import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

// didn't work i don't know why
// i got the idea let's build it one more time
const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, isError: false };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error();
  }
};

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  // first one is initial state and the second one is
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        let res = await axios(url);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };
    fetchData();
  }, [url]);
  return [state, setUrl];
};

function App() {
  const [query, setQuery] = useState("redux");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://hn.algolia.com/api/v1/search?query=redux",
    {
      hits: [],
    }
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = (e) => {
    // this dude will preven that
    e.preventDefault();
    doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="button">search</button>
      </form>
      {isError && <div>Something went wrong</div>}
      {isLoading ? (
        <div>loading ....</div>
      ) : (
        <ul>
          {data.hits.map((item) => {
            return (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
