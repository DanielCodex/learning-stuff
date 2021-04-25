import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [click, setClick] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (event) => {
    setClick([...text].reverse().join("")); // it does matter where you do this
    event.preventDefault();
  };

  const reset = () => {
    setText("");
    setClick("");
  };

  return (
    <div>
      <h1>{click}</h1>
      <Form
        onSubmit={handleClick}
        text={text}
        onChange={handleChange}
        onClick={reset}
      />
    </div>
  );
}

const Form = ({ onSubmit, text, onChange, onClick }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={onChange} />
      {/* <button type="button" onClick={handleClick}>
        // do it either with this button or form 
        reverseme
      </button> */}
      <button type="button" onClick={onClick}>
        reset
      </button>
    </form>
  );
};

export default App;
