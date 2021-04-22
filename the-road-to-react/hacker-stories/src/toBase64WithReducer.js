// next time
import React, { useReducer } from "react";

// still i don't know
const initialState = {
  cipher: "",
  query: "",
};

const cipherReducer = (state, action) => {
  switch (action.type) {
    // case "text":
    //   return {...state, cipher: }
    case "cipher":
      return { ...state, query: btoa(state.cipher) };
    default:
      return state;
  }
};

function App() {
  const [cipher, dispatch] = useReducer(cipherReducer, initialState);

  return (
    <div>
      <h1>hello world</h1>
      <input type="text" />
    </div>
  );
}

export default App;
