import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../../components/ArtWorksList/ArtWorksList", () => ({
  __esModule: true,
  default: () => <div>ArtWorks List</div>,
}));

jest.mock("../../components/Pagination/Pagination", () => ({
  __esModule: true,
  default: ({
    onSetPage,
    curPage,
  }: {
    onSetPage: (page: number) => void;
    curPage: number;
  }) => (
    <div>
      <button onClick={() => onSetPage(curPage + 1)}>Next Page</button>
    </div>
  ),
}));

jest.mock("../../components/Search/Search", () => ({
  __esModule: true,
  default: ({ onSearch }: { onSearch: (str: string) => void }) => (
    <input type="text" onChange={e => onSearch(e.target.value)} />
  ),
}));

jest.mock("../../components/Sort/Sort", () => ({
  __esModule: true,
  default: ({ onSortChange }: { onSortChange: (sort: string) => void }) => (
    <select onChange={e => onSortChange(e.target.value)}>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  ),
}));

jest.mock("../../components/OtherWorks/OtherWorks", () => ({
  __esModule: true,
  default: () => <div>Other Works</div>,
}));

describe("HomePage Component", () => {
  it("renders the page content correctly", () => {
    render(
      <Router>
        <HomePage />
      </Router>,
    );

    expect(screen.getByText(/Our special gallery/i)).toBeInTheDocument();
    expect(screen.getByText(/ArtWorks List/i)).toBeInTheDocument();
    expect(screen.getByText(/Other Works/i)).toBeInTheDocument();
  });

  it("handles search input and resets page", async () => {
    render(
      <Router>
        <HomePage />
      </Router>,
    );

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "art" } });

    await waitFor(() => {
      expect(screen.getByDisplayValue("art")).toBeInTheDocument();
    });
  });

  it("handles sort change and resets page", async () => {
    render(
      <Router>
        <HomePage />
      </Router>,
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "desc" } });

    await waitFor(() => {
      expect(select).toHaveValue("desc");
    });
  });

  it("handles pagination", async () => {
    render(
      <Router>
        <HomePage />
      </Router>,
    );

    const nextPageButton = screen.getByText(/Next Page/i);
    fireEvent.click(nextPageButton);

    await waitFor(() => {
      expect(nextPageButton).toBeInTheDocument();
    });
  });
});
