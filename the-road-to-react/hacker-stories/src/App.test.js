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

  it("renders all properites", () => {
    const component = renderer.create(<Item item={item} />);
    expect(component.root.findByType("a").props.href).toEqual(
      "https://reactjs.org/"
    );

    expect(component.root.findAllByType("span")[1].props.children).toEqual(
      "Jordan Walke"
    );
  });
});
