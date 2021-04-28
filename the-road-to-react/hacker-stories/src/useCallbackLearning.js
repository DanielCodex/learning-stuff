import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";

function App() {
  console.log("render: app");
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

  // that's really cool
  const handleRemove = React.useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add user
      </button>
      <List list={users} onRemove={handleRemove} />
    </div>
  );
}

const List = React.memo(({ list, onRemove }) => {
  console.log("Render: List");
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
});

const ListItem = React.memo(({ item, onRemove }) => {
  console.log("Render: ListItem");
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
});

export default App;
