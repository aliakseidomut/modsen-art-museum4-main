import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ArtWorkCard from "./ArtWorkCard";

jest.mock("../../components/ToFavoritesButton/ToFavoritesButton", () => ({
  __esModule: true,
  default: ({ id }: { id: number }) => (
    <button data-testid="favorite-button">Favorite {id}</button>
  ),
}));

describe("ArtWorkCard Component", () => {
  const mockProps = {
    id: 123,
    imgUrl: "https://example.com/image.jpg",
    title: "Starry Night",
    artistTitle: "Vincent van Gogh",
  };

  const renderComponent = () =>
    render(
      <MemoryRouter>
        <ArtWorkCard {...mockProps} />
      </MemoryRouter>,
    );

  test("renders ArtWorkCard component without errors", () => {
    renderComponent();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  test("displays the image with correct src and alt attributes", () => {
    renderComponent();
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockProps.imgUrl);
    expect(image).toHaveAttribute("alt", mockProps.title);
  });

  test("displays the correct title and artist", () => {
    renderComponent();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.artistTitle)).toBeInTheDocument();
  });

  test("navigates to the correct URL when clicked", () => {
    renderComponent();
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/artworks/${mockProps.id}`);
  });

  test("renders ToFavoritesButton with correct id", () => {
    renderComponent();
    const favoriteButton = screen.getByTestId("favorite-button");
    expect(favoriteButton).toBeInTheDocument();
    expect(favoriteButton).toHaveTextContent(`Favorite ${mockProps.id}`);
  });
});