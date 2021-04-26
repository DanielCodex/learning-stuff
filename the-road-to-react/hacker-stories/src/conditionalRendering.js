import React from "react";

const users = [
  { id: "1", firstName: "Robin", lastName: "Wieruch" },
  { id: "2", firstName: "Dennis", lastName: "Wieruch" },
];

function App() {
  return (
    <div>
      <h1>conditional rendering</h1>
      <List list={users} />
    </div>
  );
}

const List = ({ list }) => {
  if (!list) {
    return null;
  }

  // we can do a lot of cools shit
  if (!list.length) {
    return <p>sorry, the list is empyt</p>;
  }

  return (
    <ul>
      {list.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
};

const Item = ({ item }) => {
  return (
    <li>
      {item.firstName} {item.lastName}
    </li>
  );
};

export default App;
