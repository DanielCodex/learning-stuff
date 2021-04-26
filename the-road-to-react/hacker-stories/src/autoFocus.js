import React from "react";

function App() {
  return (
    <div>
      <h1>hello world</h1>
      <InputField isFocus />
      <InputField isFocus />
    </div>
  );
}

const InputField = ({ isFocus }) => {
  return (
    <>
      <label>your name:</label>
      <input type="text" autoFocus={isFocus} />
    </>
  );
};

export default App;
