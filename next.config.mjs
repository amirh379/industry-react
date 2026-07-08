/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces a minimal, self-contained server bundle in .next/standalone,
  // which keeps the production Docker image small and fast to build.
  output: "standalone",
};

export default nextConfig;
