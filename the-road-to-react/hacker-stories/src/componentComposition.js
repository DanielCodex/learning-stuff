import React, { useState } from "react";

function App() {
  const onSubmit = (username) => console.log(username);
  return (
    <div>
      <h1>hello world</h1>
      <UsernameFrom onSubmit={onSubmit} />
    </div>
  );
}

const UsernameFrom = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  return (
    <Form
      onSubmit={(event) => {
        onSubmit(username);
        // prevent browswer from reloading
        event.preventDefault();
      }}
    >
      <InputField value={username} onChange={setUsername}>
        YOUR NAME:
      </InputField>
      <Button type="submit">send</Button>
    </Form>
  );
};

const InputField = ({ value, onChange, children }) => {
  return (
    <label>
      {children}
      <input
        type="text"
        value={value}
        // get the value
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

const Form = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

const Button = ({ onClick, type = "button", children }) => {
  return (
    <button type={type} onClick={onclick}>
      {children}
    </button>
  );
};

export default App;
