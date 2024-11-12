import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToFavoritesButton from "./ToFavoritesButton";

describe("ToFavoritesButton", () => {
  const id = "test-artwork-id";

  beforeEach(() => {
    localStorage.clear();
  });

  test("renders with inactive style when localStorage is empty", () => {
    render(<ToFavoritesButton id={id} />);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("ToFavoriteButton");
    expect(button).not.toHaveClass("ToFavoriteButtonActive");
  });

  test("renders with active style if item exists in localStorage", () => {
    localStorage.setItem(id, "null");
    render(<ToFavoritesButton id={id} />);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("ToFavoriteButtonActive");
  });

  test("adds item to localStorage on click if it was not already there", () => {
    render(<ToFavoritesButton id={id} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(localStorage.getItem(id)).toBe("null");
    expect(button).toHaveClass("ToFavoriteButtonActive");
  });

  test("removes item from localStorage on click if it was already there", () => {
    localStorage.setItem(id, "null");
    render(<ToFavoritesButton id={id} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(localStorage.getItem(id)).toBeNull();
    expect(button).toHaveClass("ToFavoriteButton");
  });
});
