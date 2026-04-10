import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blogwriter.html",
        destination: "/blogwriter",
        permanent: true,
      },
      {
        source: "/coaching.html",
        destination: "/coaching",
        permanent: true,
      },
      {
        source: "/homepage.html",
        destination: "/homepage-service",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/resources.html",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/columns.html",
        destination: "/columns",
        permanent: true,
      },
      {
        source: "/meta-ad-guide.html",
        destination: "/guides/meta-ad",
        permanent: true,
      },
      {
        source: "/blog-guide.html",
        destination: "/guides/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
