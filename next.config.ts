import type { NextConfig } from "next";
import createMDX from "@next/mdx"
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';


const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    viewTransition: true,
    optimizePackageImports: [
      "@phosphor-icons/react"
    ]
  }
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default withMDX(nextConfig);
