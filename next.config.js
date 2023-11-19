/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "utfs.io" }, { hostname: "i.ibb.co" }],
  },
};

module.exports = nextConfig;
