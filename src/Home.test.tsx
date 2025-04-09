import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Ensure react-router-dom is installed
import Home from "./components/Home";

describe("Home Component", () => {
  test("renders profile image and toggles between images", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const profileImage = screen.getByAltText("Profile");
    expect(profileImage).toBeInTheDocument();

    // Simulate image toggle
    setTimeout(() => {
      expect(profileImage.getAttribute("src")).toContain("athelete.png");
    }, 1500);
  });

  test("renders name and description", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("VIPUL SHARMA")).toBeInTheDocument();
    expect(screen.getByText("🌎 🇮🇳 🪽 ⚡️🏅 💖")).toBeInTheDocument();
  });

  test("renders chips with correct labels", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("Commercial Asset Tech @ PwC")).toBeInTheDocument();
    expect(screen.getByText("Athlete @ AFI | WWRC 2025")).toBeInTheDocument();
  });

  test("navigates to experience page on button click", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const experienceButton = screen.getByText("Experience");
    fireEvent.click(experienceButton);

    expect(mockNavigate).toHaveBeenCalledWith("/experience");
  });

  test("renders social media icons", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const socialIcons = [
      "FacebookIcon",
      "InstagramIcon",
      "LinkedInIcon",
      "TwitterIcon",
      "RedditIcon",
      "GitHubIcon",
    ];

    socialIcons.forEach((icon) => {
      expect(screen.getByTestId(icon)).toBeInTheDocument();
    });
  });

  test("renders technologies section", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("Technologies")).toBeInTheDocument();
    const techImages = screen.getAllByRole("img");
    expect(techImages.length).toBeGreaterThan(0);
  });

  test("renders certifications section", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("Certifications")).toBeInTheDocument();
    const certificationImages = screen.getAllByAltText(/AWS|PwC/);
    expect(certificationImages.length).toBeGreaterThan(0);
  });

  test("renders footer text", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/© 2024 Vipul Sharma. All rights reserved./i)).toBeInTheDocument();
  });
});
