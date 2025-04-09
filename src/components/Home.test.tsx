import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home Component", () => {
  test("renders name and description", () => {
    render(<Home />);
    expect(screen.getByText("VIPUL SHARMA")).toBeInTheDocument();
    expect(screen.getByText("🌎 🇮🇳 🪽 ⚡️🏅 💖")).toBeInTheDocument();
  });

  test("renders chips with correct labels", () => {
    render(<Home />);
    expect(screen.getByText("Commercial Asset Tech @ PwC")).toBeInTheDocument();
    expect(screen.getByText("Athlete @ AFI | WWRC 2025")).toBeInTheDocument();
  });

  test("renders technologies section", () => {
    render(<Home />);
    expect(screen.getByText("Technologies")).toBeInTheDocument();
    const techImages = screen.getAllByRole("img");
    expect(techImages.length).toBeGreaterThan(0);
  });

  test("renders certifications section", () => {
    render(<Home />);
    expect(screen.getByText("Certifications")).toBeInTheDocument();
    const certificationImages = screen.getAllByAltText(/AWS|PwC/);
    expect(certificationImages.length).toBeGreaterThan(0);
  });

  test("renders footer text", () => {
    render(<Home />);
    expect(screen.getByText(/© 2024 Vipul Sharma. All rights reserved./i)).toBeInTheDocument();
  });

  test("renders resume button", () => {
    render(<Home />);
    const resumeButton = screen.getByText("Resume");
    expect(resumeButton).toBeInTheDocument();
  });
});
