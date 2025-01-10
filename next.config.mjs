/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
    domains: ["res.cloudinary.com"],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL, // Add this line
  },
};

export default nextConfig;
