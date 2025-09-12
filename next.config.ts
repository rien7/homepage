import type { NextConfig } from "next";
import createMDX from "@next/mdx"
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

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
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter
    ]
  }
})

export default withMDX(nextConfig);
