import React, { useReducer } from "react";

// aka initialState
const people = [
  { name: "Jay", alive: true },
  { name: "Kailee", alive: true },
  { name: "John", alive: true },
  { name: "Mia", alive: true },
];

const reducer = (people, action) => {
  if (action.type === "chomp") {
    return people.map((person) => {
      if (person.name === action.payload) {
        person.alive = false;
      }
      return person;
    });
  }
  if (action.type === "revive") {
    return people.map((person) => {
      if (person.name === action.payload) {
        person.alive = true;
      }
      return person;
    });
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, people);

  const devour = (name) => {
    dispatch({ type: "chomp", payload: name });
  };
  const spitOut = (name) => {
    dispatch({ type: "revive", payload: name });
  };
  return (
    <div>
      {state.map((person, index) => {
        return (
          <div key={index}>
            <p>
              {person.name}:{" "}
              {person.alive ? (
                <div>
                  alive{" "}
                  <button type="button" onClick={() => devour(person.name)}>
                    kill him
                  </button>
                </div>
              ) : (
                <div>
                  dead{" "}
                  <button type="button" onClick={() => spitOut(person.name)}>
                    revive me
                  </button>
                </div>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
