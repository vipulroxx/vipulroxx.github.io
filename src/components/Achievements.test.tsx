import React from "react";
import { render, screen } from "@testing-library/react";
import Achievements from "./Achievements";

describe("Achievements Component", () => {
  test("renders publication section", () => {
    render(<Achievements />);
    expect(screen.getByText("PUBLICATION")).toBeInTheDocument();
  });
});
