import React, { useState, memo, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import emoji from "./emoji-list";
import { v4 as uuidv4 } from "uuid";
import userEvent from "@testing-library/user-event";

function App() {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    setQuery(text);
    e.preventDefault();
  };

  const res = !query
    ? emoji
    : emoji.filter((item) => {
        return item.title.toLowerCase().includes(query.toLowerCase());
      });

  // const res = useCallback(() => {
  //   return !query
  //     ? emoji
  //     : emoji.filter((item) => {
  //         return item.title.toLowerCase().includes(query.toLowerCase());
  //       });
  // }, [query]);

  // console.log(res);

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Search For Emoji </h1>
        <EmojiList
          list={res}
          handleClick={handleClick}
          handleChange={handleChange}
        />
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

const InputStyle = styled.input`
  width: 250px;
  /* margin: 10px; */
`;

const ButtonStyle = styled.button`
  width: 90px;
  margin-left: 10px;
  background-color: orange;
  border: none;
`;

const Form = styled.form`
  margin: 10px;
`;

const EmojiList = memo(({ list, handleClick, handleChange }) => {
  console.log("i should not re-render ");
  // * TODO: fix unique key for list
  return (
    <div>
      {/* <FormComp /> */}
      <Form onSubmit={handleClick}>
        {" "}
        <InputStyle type="text" onChange={handleChange} />
        <ButtonStyle type="submit">click</ButtonStyle>
      </Form>
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
});

const FormComp = memo(({ handleClick, handleChange }) => {
  return (
    <Form onSubmit={handleClick}>
      {" "}
      <InputStyle type="text" onChange={handleChange} />
      <ButtonStyle type="submit">click</ButtonStyle>
    </Form>
  );
});

export default App;
