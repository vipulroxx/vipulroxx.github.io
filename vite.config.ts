/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Keep CRA's output folder so the deploy scripts (spa-routes.sh, gh-pages -d build) are unchanged.
  build: { outDir: "build", chunkSizeWarningLimit: 1000 },
  server: { port: 3000, open: true },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
    css: false,
  },
});
