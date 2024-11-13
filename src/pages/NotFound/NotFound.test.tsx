import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "./NotFound";

describe("NotFound Component", () => {
  it("renders the error message and status code", () => {
    render(
      <Router>
        <NotFound />
      </Router>,
    );

    expect(screen.getByText(/Error: Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });

  it("renders the link to the home page", () => {
    render(
      <Router>
        <NotFound />
      </Router>,
    );

    const link = screen.getByText(/To home page/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
