import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

import Footer from "../Footer";

afterEach(() => {
  cleanup();
});

it("Should render footer", () => {
  render(<Footer />);

  const footerElement = screen.getByTestId("footer");

  expect(footerElement).toBeInTheDocument();
});

it("Contains p tag with omkobass", () => {
  render(<Footer />);

  const footerElement = screen.getByTestId("footer");

  expect(footerElement).toContainHTML("<p>OmkoBass Github</p>");
});

it("Renders correctly", () => {
  const tree = renderer.create(<Footer />).toJSON();

  expect(tree).toMatchSnapshot();
});
