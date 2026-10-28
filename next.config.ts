import type { NextConfig } from "next";

// Na GitHub Pages strona działa pod podścieżką repozytorium (np. /BadzWsparciemWebPage).
// Workflow ustawia BASE_PATH, lokalnie zostaje pusty.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
