import React, { useState, useMemo } from "react";

const users = [
  { id: "a", name: "Robin" },
  { id: "b", name: "Dennis" },
];

function App() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setSearch(text);
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      console.log("am i running ");
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <div>
      <h1>hello world</h1>
      <input type="text" value={text} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        search
      </button>
      <List list={filteredUsers} />
    </div>
  );
}

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => {
        return <ListItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default App;
