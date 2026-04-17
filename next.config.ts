import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
env: {
  NEXT_PUBLIC_API_URL: "https://api.chatpanelpro.com/api",
  NEXT_PUBLIC_API_BASE_URL: "/api",
  NEXT_PUBLIC_STORAGE_URL: "https://api.chatpanelpro.com",
},
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/auth/login",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],
  },
};

export default nextConfig;
