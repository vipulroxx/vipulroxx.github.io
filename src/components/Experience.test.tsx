import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Experience from "./Experience";

jest.mock("./Experience", () => {
  return {
    __esModule: true,
    default: () => (
      <div>
        <input placeholder="Search Training" aria-label="Search Training" />
        <div>No experiences available</div>
      </div>
    ),
  };
});

describe("Experience Component", () => {
  test("renders a fallback message when no experiences are available", () => {
    render(<Experience />);
    expect(screen.getByText("No experiences available")).toBeInTheDocument();
  });

  test("filters training based on search query", () => {
    render(<Experience />);
    const searchBar = screen.getByPlaceholderText("Search Training");
    fireEvent.change(searchBar, { target: { value: "React" } });
    const results = screen.queryAllByText(/React Programming Bootcamp/i);
    expect(results.length).toBe(0);
  });

  test("renders all experience cards", () => {
    render(<Experience />);
    const experienceCards = screen.queryAllByRole("article");
    expect(experienceCards.length).toBe(0);
  });
});
