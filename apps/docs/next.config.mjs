import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  basePath: '/docs',
  assetPrefix: '/docs',
  reactStrictMode: true,
};

export default withMDX(config);
