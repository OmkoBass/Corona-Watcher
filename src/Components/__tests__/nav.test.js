import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

import Nav from "../Nav";

afterEach(() => {
  cleanup();
});

it("Should render Nav", () => {
  render(<Nav />);

  const navElement = screen.getByTestId("nav");

  expect(navElement).toBeInTheDocument();
});

it("Should contain text-center class", () => {
  render(<Nav />);

  const navElement = screen.getByTestId("nav");

  expect(navElement).toHaveClass("text-center text-white p-3");
});

it("Should render correctly", () => {
  const tree = renderer.create(<Nav />).toJSON();

  expect(tree).toMatchSnapshot();
});
