/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces a minimal, self-contained server bundle in .next/standalone,
  // which keeps the production Docker image small and fast to build.
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/contact-1",
        destination: "/technical-consultation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
