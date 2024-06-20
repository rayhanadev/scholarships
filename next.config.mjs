await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["@node-rs/argon2"],
  },
};

export default config;
