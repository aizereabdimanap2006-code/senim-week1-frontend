/** @type {import('next').NextConfig} */
const config = {
  devIndicators: false,
  distDir: process.env.SENIM_DIST_DIR || (process.env.NODE_ENV === "development" ? ".next-dev" : ".next"),
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Senim-App", value: "senim-week2" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};
export default config;
