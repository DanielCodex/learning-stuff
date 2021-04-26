import React, { Children, useState } from "react";

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
        onSubmit(username); // get the username from APp
        event.preventDefault();
      }}
    >
      <InputField vlaue={username} onChange={setUsername}>
        your name:
      </InputField>
      <Button color="orange" type="submit">
        send
      </Button>
    </Form>
  );
};

const InputField = ({ value, onChange, type = "text", children }) => {
  return (
    <label>
      {children}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
};

const Form = ({ onSubmit, children }) => {
  // this onSubmit is a attribute for form
  // i don't think naming stuff like this is a good idea
  return <form onSubmit={onSubmit}>{children}</form>;
};

const Button = ({ color = "white", onClick, type = "button", children }) => (
  <button style={{ backgroundColor: color }} type={type} onClick={onClick}>
    {children}
  </button>
);

export default App;
