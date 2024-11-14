import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToFavoritesButton from "./ToFavoritesButton";
import { FavoritesContext } from "../../context/FavoritesContext";

describe("ToFavoritesButton", () => {
  const id = "test-artwork-id";
  const updateFavoritesMock = jest.fn();

  beforeEach(() => {
    localStorage.clear();
    updateFavoritesMock.mockClear();
  });

  const renderWithContext = () =>
    render(
      <FavoritesContext.Provider
        value={{ ids: [], updateFavorites: updateFavoritesMock }}
      >
        <ToFavoritesButton id={id} />
      </FavoritesContext.Provider>,
    );

  test("renders with inactive style when localStorage is empty", () => {
    renderWithContext();
    const button = screen.getByRole("button");

    expect(button).toHaveClass("ToFavoriteButton");
    expect(button).not.toHaveClass("ToFavoriteButtonActive");
  });

  test("renders with active style if item exists in localStorage", () => {
    localStorage.setItem(id, "null");
    renderWithContext();
    const button = screen.getByRole("button");

    expect(button).toHaveClass("ToFavoriteButtonActive");
  });

  test("adds item to localStorage on click if it was not already there", () => {
    renderWithContext();
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(localStorage.getItem(id)).toBe("null");
    expect(button).toHaveClass("ToFavoriteButtonActive");
    expect(updateFavoritesMock).toHaveBeenCalledTimes(1);
  });

  test("removes item from localStorage on click if it was already there", () => {
    localStorage.setItem(id, "null");
    renderWithContext();
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(localStorage.getItem(id)).toBeNull();
    expect(button).toHaveClass("ToFavoriteButton");
    expect(updateFavoritesMock).toHaveBeenCalledTimes(1);
  });
});
