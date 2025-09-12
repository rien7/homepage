import { BlogMDX } from "@/app/_components/BlogMDX";
import { BlogTitle } from "@/app/_components/VTComponents";
import { BlogItem } from "@/app/_components/home_page/List";
import { evaluate } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";

export const runtime = "edge";

async function ContentPage({ slug }: { slug: string }) {
  const url = `https://raw.githubusercontent.com/rien7/blog/main/${slug}`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });
  const markdown = await res.text();
  return <BlogMDX markdown={markdown} />;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch("https://blog.zrien7.workers.dev/blog/list", {
    cache: "no-cache",
  });
  const lists = await res.json();
  const title = lists.filter((item: BlogItem) => item.id === slug)[0].name;
  return (
    <div className="flex flex-col justify-center items-center">
      <BlogTitle id={slug} title={title} />
      <div>
        <Suspense fallback={<div style={{ height: 400 }} />}>
          <ContentPage slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   const res = await fetch("https://blog.zrien7.workers.dev/blog/list");
//   const lists = await res.json();
//   const slugs = lists.reduce(
//     (prev: BlogItem[], l: BlogItem) => [...prev, { slug: l.id }],
//     []
//   );
//   return slugs;
// }
