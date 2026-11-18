import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
}

test("footer shows the current year", () => {
  renderHome();
  const year = new Date().getFullYear();
  expect(screen.getByText(`© ${year} Vipul Sharma. All rights reserved.`)).toBeInTheDocument();
});

test("AWS technology icon uses devicon's current file name", () => {
  renderHome();
  const icon = screen.getByAltText("AWS");
  expect(icon).toHaveAttribute(
    "src",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"
  );
});

test("shows all six certification badges", () => {
  renderHome();
  [
    "AWS Solutions Architect",
    "AWS Business Accredited",
    "AWS Cloud Practitioner",
    "AWS Cloud Economics Essential",
  ].forEach((alt) => expect(screen.getByAltText(alt)).toBeInTheDocument());
  expect(screen.getAllByRole("img").length).toBeGreaterThanOrEqual(6);
});
