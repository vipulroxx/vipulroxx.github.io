import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects Component", () => {
  test("renders the search bar", () => {
    render(<Projects />);
    const searchBar = screen.getByPlaceholderText("Search projects...");
    expect(searchBar).toBeInTheDocument();
  });

  test("filters projects based on search query", () => {
    render(<Projects />);
    const searchBar = screen.getByPlaceholderText("Search projects...");
    fireEvent.change(searchBar, { target: { value: "Samadhaan" } });
    expect(screen.getByText("Samadhaan")).toBeInTheDocument();
  });

  test("opens project details dialog on view details button click", () => {
    render(<Projects />);
    const viewDetailsButton = screen.getAllByRole("button", { name: /view details/i })[0];
    fireEvent.click(viewDetailsButton);
    expect(screen.getByText("Project Details")).toBeInTheDocument();
  });
});
