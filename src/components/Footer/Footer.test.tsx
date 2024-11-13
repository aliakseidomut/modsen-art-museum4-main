import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Footer Component", () => {
  const renderComponent = () =>
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

  test("renders the Footer component without errors", () => {
    renderComponent();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  test("renders the logo with correct src and alt attributes", () => {
    renderComponent();
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/aliakseidomut/modsen-art-museum4-main/38fe80f7bba17ff5650b359809c8ad9ffe892b40/src/assets/images/museum-logo-2.svg",
    );
    expect(logo).toHaveAttribute("alt", "museum logo");
  });

  test("links to the home page", () => {
    renderComponent();
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
