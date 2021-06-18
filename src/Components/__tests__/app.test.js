import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

import App from "../../App";

afterEach(() => {
  cleanup();
});

it("Should render App", () => {
  render(<App />);

  const appElement = screen.getByTestId("app");

  expect(appElement).toBeInTheDocument();
});

it("Should render correctly", () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
