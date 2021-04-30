import React, { useState, memo } from "react";
import { v4 as uuid4 } from "uuid";
// best article
// https://www.robinwieruch.de/react-memo

function App() {
  console.log("render: ap");
  const [users, setUsers] = React.useState([
    { id: "a", name: "Robin" },
    { id: "b", name: "Dennis" },
  ]);
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAddUser = () => {
    setUsers(users.concat({ id: uuid4(), name: text }));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add user
      </button>
      <List list={users} />
    </div>
  );
}

const List = memo(({ list }) => {
  console.log("render: List");
  return (
    <ul>
      {list.map((item) => {
        return <ListItem key={item.id} item={item} />;
      })}
    </ul>
  );
});

const ListItem = memo(({ item }) => {
  console.log("render: ListItem");
  return <li>{item.name}</li>;
});

export default App;
