/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["firebasestorage.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "", // Leave empty if no specific port is used
        pathname: "/v0/b/cyb-lms.appspot.com/o/**",
      },
    ],
  },
};

export default nextConfig;
