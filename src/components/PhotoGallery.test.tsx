import React from "react";
import { render, screen } from "@testing-library/react";
import PhotoGallery from "./PhotoGallery";

describe("PhotoGallery Component", () => {
  test("renders fallback message when no photos are available", () => {
    render(<PhotoGallery />);
    expect(screen.getByText("No photos available")).toBeInTheDocument();
  });
});
