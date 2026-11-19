// @vitest-environment node
// Checks the GitHub Pages deploy script: every app route gets a real
// index.html (HTTP 200) and unknown paths fall back to 404.html.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const script = path.join(root, "scripts", "spa-routes.sh");

function scriptRoutes() {
  const match = fs.readFileSync(script, "utf8").match(/ROUTES=\(([^)]*)\)/);
  return match[1].trim().split(/\s+/);
}

function appRoutes() {
  const source = fs.readFileSync(path.join(root, "src", "App.jsx"), "utf8");
  return [...source.matchAll(/<Route\s+path=['"]([^'"]+)['"]/g)]
    .map((m) => m[1])
    .filter((p) => p !== "/" && p !== "*")
    .map((p) => p.replace(/^\//, ""));
}

test("deploy script covers every route in App.jsx", () => {
  expect(scriptRoutes().sort()).toEqual(appRoutes().sort());
});

test("deploy script writes 404.html and an index.html per route", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "spa-routes-"));
  try {
    fs.mkdirSync(path.join(dir, "build"));
    fs.writeFileSync(path.join(dir, "build", "index.html"), "<html>app</html>");
    execFileSync("bash", [script], { cwd: dir });

    expect(fs.readFileSync(path.join(dir, "build", "404.html"), "utf8")).toBe("<html>app</html>");
    for (const route of scriptRoutes()) {
      const file = path.join(dir, "build", route, "index.html");
      expect(fs.readFileSync(file, "utf8")).toBe("<html>app</html>");
    }
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
