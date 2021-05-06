import { render, screen } from "@testing-library/react";
import App, { Item, List, SearchForm, InputWithLable } from "./App";
import renderer from "react-test-renderer";

describe("Item", () => {
  const item = {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_commnets: 3,
    points: 4,
    objectID: 0,
  };
  // don't repeat yourself
  const handleRemoveItem = jest.fn();

  let component;

  beforeEach(() => {
    component = renderer.create(
      <Item item={item} onRemoveItem={handleRemoveItem} />
    );
  });

  it("renders all properites", () => {
    // const component = renderer.create(<Item item={item} />);
    expect(component.root.findByType("a").props.href).toEqual(
      "https://reactjs.org/"
    );

    expect(component.root.findAllByType("span")[1].props.children).toEqual(
      "Jordan Walke"
    );
  });

  it("calls onRemove on button click", () => {
    // const handleRemoveItem = jest.fn();

    // const component = renderer.create(
    //   <Item item={item} onRemoveItem={handleRemoveItem} />
    // );

    component.root.findByType("button").props.onClick();

    expect(handleRemoveItem).toHaveBeenCalledTimes(1);
    expect(handleRemoveItem).toHaveBeenCalledWith(item);

    expect(component.root.findAllByType(Item).length).toEqual(1);
  });
});

describe("List", () => {
  const list = [
    {
      title: "React",
      url: "https://reactjs.org",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  it("renders two items", () => {
    const component = renderer.create(<List list={list} />);
    expect(component.root.findAllByType(Item).length).toEqual(2);
  });
});
