import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sort from "./Sort";

const mockOnSortChange = jest.fn();

describe("Sort component", () => {
  beforeEach(() => {
    mockOnSortChange.mockClear();
  });

  it("renders all radio buttons and sets default selection correctly", () => {
    render(<Sort onSortChange={mockOnSortChange} />);

    const defaultRadioButton = screen.getByLabelText("Default");
    const titleRadioButton = screen.getByLabelText("By title");
    const dateRadioButton = screen.getByLabelText("By date of complete");

    expect(defaultRadioButton).toBeInTheDocument();
    expect(titleRadioButton).toBeInTheDocument();
    expect(dateRadioButton).toBeInTheDocument();

    expect(defaultRadioButton).toBeChecked();
    expect(titleRadioButton).not.toBeChecked();
    expect(dateRadioButton).not.toBeChecked();
  });

  it("changes the selected sort option and calls onSortChange with correct value", () => {
    render(<Sort onSortChange={mockOnSortChange} />);

    const titleRadioButton = screen.getByLabelText("By title");
    const dateRadioButton = screen.getByLabelText("By date of complete");

    fireEvent.click(titleRadioButton);
    expect(titleRadioButton).toBeChecked();
    expect(mockOnSortChange).toHaveBeenCalledWith("title.keyword");

    fireEvent.click(dateRadioButton);
    expect(dateRadioButton).toBeChecked();
    expect(mockOnSortChange).toHaveBeenCalledWith("date_end");
  });

  it("applies the correct active style based on selected sort option", () => {
    render(<Sort onSortChange={mockOnSortChange} />);

    const defaultRadioButton = screen.getByLabelText("Default");
    const titleRadioButton = screen.getByLabelText("By title");

    expect(defaultRadioButton.parentElement).toHaveClass("buttonActive");

    fireEvent.click(titleRadioButton);
    expect(titleRadioButton.parentElement).toHaveClass("buttonActive");
    expect(defaultRadioButton.parentElement).not.toHaveClass("buttonActive");
  });
});
