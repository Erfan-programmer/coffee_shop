/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // Add the domains from which you want to load images
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  env: {
    NEXT_PUBLIC_CKEDITOR_LICENSE_KEY: '36612'
  }
};

export default nextConfig;
