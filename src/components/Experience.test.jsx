import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Experience from "./Experience";

test("lists work experience", () => {
  render(<Experience />);
  expect(screen.getByText("Work Experience")).toBeInTheDocument();
  expect(screen.getByText("TATA Asset Management Corporation")).toBeInTheDocument();
  expect(screen.getByText("Professional Training")).toBeInTheDocument();
});

test("training search filters the table", async () => {
  const user = userEvent.setup();
  render(<Experience />);
  expect(screen.getByText("2+2 Coaching in Action")).toBeInTheDocument();
  await user.type(screen.getByLabelText("Search Training"), "react programming");
  expect(screen.queryByText("2+2 Coaching in Action")).not.toBeInTheDocument();
  expect(screen.getAllByText(/React Programming Bootcamp/).length).toBeGreaterThan(0);
});
