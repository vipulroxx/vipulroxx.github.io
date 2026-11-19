import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// App owns its BrowserRouter, so set the URL before rendering.
function renderAt(path) {
  window.history.pushState({}, "", path);
  return render(<App />);
}

function selectedTabs() {
  const nav = screen.getByRole("tablist", { name: "Navigation Tab" });
  return within(nav)
    .getAllByRole("tab")
    .filter((tab) => tab.getAttribute("aria-selected") === "true");
}

function expectSelectedTab(name) {
  const selected = selectedTabs();
  expect(selected).toHaveLength(1);
  expect(selected[0]).toHaveTextContent(name);
}

describe("navigation", () => {
  test("shows all five tabs", () => {
    renderAt("/");
    const nav = screen.getByRole("tablist", { name: "Navigation Tab" });
    const labels = within(nav).getAllByRole("tab").map((t) => t.textContent);
    expect(labels).toEqual(["Home", "Projects", "Experience", "Publication", "Moments"]);
  });

  test.each([
    ["/", "Home", "VIPUL SHARMA"],
    ["/projects", "Projects", "Search projects..."],
    ["/experience", "Experience", "Work Experience"],
    ["/publication", "Publication", "Breast Cancer Classification using Deep Neural Network"],
  ])("deep link %s renders its page and highlights the %s tab", (path, tab, marker) => {
    renderAt(path);
    expectSelectedTab(tab);
    expect(
      screen.queryByText(marker) || screen.queryByPlaceholderText(marker)
    ).toBeInTheDocument();
  });

  test("deep link /moments highlights the Moments tab", () => {
    renderAt("/moments");
    expectSelectedTab("Moments");
  });

  test.each(["/experience/", "/Projects", "/publication//"])(
    "ignores trailing slashes and case (%s)",
    (path) => {
      renderAt(path);
      const expected = path.replace(/\/+$/, "").slice(1).toLowerCase();
      expect(selectedTabs()[0].textContent.toLowerCase()).toBe(expected);
    }
  );

  test("unknown paths fall back to Home", () => {
    renderAt("/this-page-does-not-exist");
    expectSelectedTab("Home");
    expect(screen.getByText("VIPUL SHARMA")).toBeInTheDocument();
  });

  test("certificate gallery selects no tab", () => {
    renderAt("/CertificateGallery");
    expect(selectedTabs()).toHaveLength(0);
    expect(screen.getByText("AWS Certified Cloud Practitioner")).toBeInTheDocument();
  });

  test("clicking a tab navigates and moves the highlight", async () => {
    const user = userEvent.setup();
    renderAt("/");
    await user.click(screen.getByRole("tab", { name: /Experience/ }));
    expect(window.location.pathname).toBe("/experience");
    expectSelectedTab("Experience");
    expect(screen.getByText("Work Experience")).toBeInTheDocument();
  });
});
