/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "static.highongrowth.xyz",
        protocol:'https',
        
      },
    ],
  },
};

export default nextConfig;
