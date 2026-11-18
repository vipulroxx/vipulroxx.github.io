import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Projects from "./Projects";

test("lists projects", () => {
  render(<Projects />);
  expect(screen.getByText("Ameer Kissan")).toBeInTheDocument();
  expect(screen.getByText("CPU Schedulers")).toBeInTheDocument();
});

test("search filters the project list", async () => {
  const user = userEvent.setup();
  render(<Projects />);
  await user.type(screen.getByPlaceholderText("Search projects..."), "scheduler");
  expect(screen.getByText("CPU Schedulers")).toBeInTheDocument();
  expect(screen.queryByText("Ameer Kissan")).not.toBeInTheDocument();
});

test("search with no match shows no projects", async () => {
  const user = userEvent.setup();
  render(<Projects />);
  await user.type(screen.getByPlaceholderText("Search projects..."), "zzzz-no-match");
  expect(screen.queryByText("CPU Schedulers")).not.toBeInTheDocument();
  expect(screen.queryByText("Ameer Kissan")).not.toBeInTheDocument();
});
