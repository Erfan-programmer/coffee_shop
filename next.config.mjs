/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output:"standalone",
  distDir:"dist",
  images: {
    domains: ["localhost"], // Allow loading from localhost
    unoptimized:true
  },
};

export default nextConfig;
