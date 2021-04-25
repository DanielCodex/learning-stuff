import React, { useReducer, useState } from "react";
import { v4 as uuid4 } from "uuid";

const initialList = [
  {
    id: "a",
    name: "daniel",
  },
  {
    id: "b",
    name: "shahin",
  },
  {
    id: "c",
    name: "mina",
  },
];

const listReducer = (state, action) => {
  switch (action.type) {
    case "add_item":
      return state.concat({ name: action.name, id: action.id });
    default:
      throw new Error();
  }
};

function App() {
  const [name, setName] = useState("");
  // const [newList, setNewList] = useState(initialList);

  const [list, dispatchList] = useReducer(listReducer, initialList);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const addItem = () => {
    dispatchList({ type: "add_item", name: name, id: uuid4() });

    setName("");
  };

  return (
    <div>
      <h1>{name}</h1>
      <AddItem name={name} onChange={handleChange} onAdd={addItem} />
      <List list={list} />
    </div>
  );
}

const AddItem = ({ name, onChange, onAdd }) => {
  return (
    <div>
      <input type="text" value={name} onChange={onChange} />
      <button type="button" onClick={onAdd}>
        click
      </button>
    </div>
  );
};

const List = ({ list }) => {
  return (
    <div>
      {list.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
};

export default App;
