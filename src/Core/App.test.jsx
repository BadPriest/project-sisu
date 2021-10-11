import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Project Savings link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Project Savings/i);
  expect(linkElement).toBeInTheDocument();
});
