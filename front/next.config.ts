import type { NextConfig } from "next";
import { hostname } from "node:os";

const wordpressHostname = process.env.WORDPRESS_HOSTNAME;
const wordpressUrl = process.env.WORDPRESS_URL;

const nextConfig: NextConfig = {
  env: {
    hostname: wordpressHostname,
    wordpressUrl: wordpressUrl,
  },
  images: {
    remotePatterns: wordpressHostname ?
      [
        {
          protocol: "https",
          hostname: wordpressHostname,
          port: "",
          pathname: "/**",
        },
      ] : [],
  },
  redirects() {
    return wordpressUrl ? [
      {
        source: "/admin",
        destination: `${wordpressUrl}/wp-admin`,
        permanent: true,
      },
    ] : [];
  },
};

export default nextConfig;
