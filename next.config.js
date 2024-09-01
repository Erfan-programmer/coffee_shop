/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  distDir: "dist",
  images: {
    domains: ["localhost"],
    // unoptimized: true,
  },
};

module.exports = nextConfig;  // Change this line
