import VE from '@vanilla-extract/next-plugin';

/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = VE;
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default withVanillaExtract(nextConfig);
