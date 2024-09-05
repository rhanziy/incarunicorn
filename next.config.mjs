import VE from "@vanilla-extract/next-plugin";

/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = VE;
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
};

export default withVanillaExtract(nextConfig);
