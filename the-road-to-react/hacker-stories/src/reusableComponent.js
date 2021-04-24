import React from "react";
// https://www.robinwieruch.de/react-reusable-components

function App() {
  return (
    <div>
      <h1>hello world</h1>
      <Button handleClick={() => console.log("you clicked")}>
        click button one
      </Button>
      <Button type={"submit"} handleClick={() => console.log("hello here")}>
        click button two
      </Button>
    </div>
  );
}

const Button = ({ type = "button", handleClick, children }) => {
  return (
    <>
      <button type={type} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

export default App;
