import { render, screen } from "@testing-library/react";
import React from "react";
import selectEvent from "react-select-event";

import { Select } from "../Select";

const options = [
  { value: "option1", label: "Test 1" },
  { value: "option2", label: "Test 2" },
  { value: "option3", label: "Test 3" },
];

describe("Select", () => {
  test("Select initial", () => {
    render(<Select options={options} ariaLabel="test-select" />);

    const selectInput = screen.getByLabelText("test-select");
    expect(selectInput).toBeInstanceOf(HTMLInputElement);
  });
  test("Select open menu", () => {
    render(<Select options={options} ariaLabel="test-select" />);

    const selectInput = screen.getByLabelText("test-select");

    selectEvent.openMenu(selectInput);

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
      expect(screen.getByText(option.label)).toBeInstanceOf(HTMLDivElement);
    });
  });
  test("Select select menu options", () => {
    render(<Select options={options} ariaLabel="test-select" />);

    const selectInput = screen.getByLabelText("test-select");

    selectEvent.openMenu(selectInput);
    selectEvent.select(selectInput, "Test 2");

    expect(screen.getByText("Test 2")).toBeInTheDocument();

    selectEvent.select(selectInput, "Test 3");

    expect(screen.getByText("Test 3")).toBeInTheDocument();
  });
});
