"use client";

import { serialize } from "next-mdx-remote-client/serialize";
import { MDXClient } from "next-mdx-remote-client/csr";
import { useEffect, useState } from "react";

export function BlogMDX({ markdown }: { markdown: string }) {
  const [mdx, setMdx] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const parse = async () => {
      const mdxSource = await serialize({
        source: markdown,
        options: {
          parseFrontmatter: true,
        },
      });
      if ("error" in mdxSource) {
        setError(mdxSource.error.message);
      } else {
        setMdx(mdxSource.compiledSource);
      }
    };
    parse();
  }, [markdown]);

  return (
    <>
      {error && <div className="text-red-500">{error}</div>}
      {mdx && <MDXClient compiledSource={mdx} />}
    </>
  );
}
