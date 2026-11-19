#!/usr/bin/env bash
# GitHub Pages has no rewrite rules, so give each client-side route a real
# index.html (served with HTTP 200). 404.html covers any other unknown path.
# Keep ROUTES in sync with the <Route> paths in src/App.jsx.
set -euo pipefail

ROUTES=(projects experience publication moments CertificateGallery dashboard)

cp build/index.html build/404.html
for route in "${ROUTES[@]}"; do
  mkdir -p "build/$route"
  cp build/index.html "build/$route/index.html"
done
