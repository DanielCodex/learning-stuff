import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import emoji from "./emoji-list";

function App() {
  const [list, setList] = useState(emoji);
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>hello world</h1>
        <EmojiList list={list} />
      </div>
    </div>
  );
}

const ListStyleUL = styled.ul`
  list-style: none;
  font-size: 20px;
  margin: 0;
  padding: 0;
  width: 500px;
`;

const ListStyle = styled.li`
  text-align: left;
  border: 1px solid white;
  padding: 9px;
`;

const EmojiList = ({ list }) => {
  return (
    <div>
      <ListStyleUL>
        {list.map((item) => {
          return (
            <>
              <ListStyle>
                {item.symbol} {item.title} <br />
              </ListStyle>
            </>
          );
        })}
      </ListStyleUL>
    </div>
  );
};

export default App;
