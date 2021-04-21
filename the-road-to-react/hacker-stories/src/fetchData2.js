import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("google");
  const [search, setSearch] = useState("google");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const res = await axios(
          `https://hn.algolia.com/api/v1/search?query=${search}`
        );
        setData(res.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, [search]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    setSearch(query);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        Search
      </button>
      {isError && <div>something went wrong...</div>}
      {isLoading ? (
        <div>Loading .... </div>
      ) : (
        data.hits.map((item) => {
          return (
            <div key={item.objectID}>
              <li>
                <a href={item.url}>{item.title}</a>
              </li>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
