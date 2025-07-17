// next.config.js
module.exports = {
    reactStrictMode: true,
    experimental: {
      serverActions: true,
    },
    env: {
      CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    },
    images: {
        remotePatterns: [new URL('https://img.clerk.com/**')],
    },
  };
  