/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/prevoyance",
        destination: "/retraite",
        permanent: true,
      },
      {
        source: "/emploi",
        destination: "/",
        permanent: true,
      },
      {
        source: "/logement",
        destination: "/",
        permanent: true,
      },
      {
        source: "/emploi-suisse",
        destination: "/",
        permanent: true,
      },
      {
        source: "/salaire-suisse",
        destination: "/",
        permanent: true,
      },
      {
        source: "/coaching-carriere",
        destination: "/",
        permanent: true,
      },
      {
        source: "/logement-en-suisse",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
