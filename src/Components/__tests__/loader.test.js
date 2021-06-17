import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

import Loader from "../Loader";

afterEach(() => {
  cleanup();
});

it("Should show loader", () => {
  render(<Loader />);

  const loaderElement = screen.getByTestId("loader");

  expect(loaderElement).toBeInTheDocument();
});

it("Should have Loading... as text content", () => {
  render(<Loader />);

  const loaderElement = screen.getByTestId("loader");

  expect(loaderElement).toHaveTextContent("Loading...");
});

it("Should contain a <span> tag", () => {
  render(<Loader />);

  const loaderElement = screen.getByTestId("loader");

  expect(loaderElement.firstChild).toHaveClass("spinner-border");
});

it("renders correctly", () => {
  const tree = renderer.create(<Loader />).toJSON();

  expect(tree).toMatchSnapshot();
});
