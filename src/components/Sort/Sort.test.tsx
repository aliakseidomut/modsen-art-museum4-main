import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Sort from "./Sort";

const mockOnSortChange = jest.fn();

describe("Sort component", () => {
  beforeEach(() => {
    mockOnSortChange.mockClear();
  });

  it("renders default radio button correctly", () => {
    render(<Sort onSortChange={mockOnSortChange} />);

    const defaultRadioButton = screen.getByLabelText("Default");

    expect(defaultRadioButton).toBeInTheDocument();
    expect(defaultRadioButton).toBeChecked();
  });

  it("renders title radio button correctly", () => {
    render(<Sort onSortChange={mockOnSortChange} />);

    const titleRadioButton = screen.getByLabelText("By title");

    expect(titleRadioButton).toBeInTheDocument();
  });

  it("renders date radio button correctly", () => {
    render(<Sort onSortChange={mockOnSortChange} />);

    const dateRadioButton = screen.getByLabelText("By date of complete");

    expect(dateRadioButton).toBeInTheDocument();
  });

  it("changes the selected sort option to 'By title' when its radio button is clicked", () => {
    render(<Sort onSortChange={mockOnSortChange} />);

    const titleRadioButton = screen.getByLabelText("By title");

    fireEvent.click(titleRadioButton);

    expect(titleRadioButton).toBeChecked();
    expect(mockOnSortChange).toHaveBeenCalledWith("title.keyword");
  });

  it("changes the selected sort option to 'By date of complete' when its radio button is clicked", () => {
    render(<Sort onSortChange={mockOnSortChange} />);

    const dateRadioButton = screen.getByLabelText("By date of complete");

    fireEvent.click(dateRadioButton);

    expect(dateRadioButton).toBeChecked();
    expect(mockOnSortChange).toHaveBeenCalledWith("date_end");
  });

  it("calls onSortChange with the correct value when 'By title' is selected", () => {
    render(<Sort onSortChange={mockOnSortChange} />);

    const titleRadioButton = screen.getByLabelText("By title");

    fireEvent.click(titleRadioButton);

    expect(mockOnSortChange).toHaveBeenCalledTimes(1);
    expect(mockOnSortChange).toHaveBeenCalledWith("title.keyword");
  });

  it("calls onSortChange with the correct value when 'By date of complete' is selected", () => {
    render(<Sort onSortChange={mockOnSortChange} />);

    const dateRadioButton = screen.getByLabelText("By date of complete");

    fireEvent.click(dateRadioButton);

    expect(mockOnSortChange).toHaveBeenCalledTimes(1);
    expect(mockOnSortChange).toHaveBeenCalledWith("date_end");
  });

  it("ensures that the default radio button is checked initially", () => {
    render(<Sort onSortChange={mockOnSortChange} />);

    const defaultRadioButton = screen.getByLabelText("Default");

    expect(defaultRadioButton).toBeChecked();
  });
});
