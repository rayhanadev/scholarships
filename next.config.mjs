await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
};

export default config;
