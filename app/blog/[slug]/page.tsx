import { BlogMDX } from "@/app/_components/BlogMDX";
import { BlogTitle } from "@/app/_components/VTComponents";
import { BlogItem } from "@/app/_components/home_page/List";
import { Suspense } from "react";
import { CalendarDotsIcon } from "@phosphor-icons/react/ssr";
import * as motion from "motion/react-client";

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
    cache: "force-cache",
  });
  const lists = await res.json();
  const current: BlogItem = lists.filter(
    (item: BlogItem) => item.id === slug
  )[0];
  const title = current.name;
  const update_date = new Date(current.update_date).toLocaleDateString("zh");
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <BlogTitle
        id={slug}
        title={title}
        className="text-4xl font-semibold text-pretty tracking-tight"
      />
      <motion.div
        initial={{ opacity: 0, y: "20px", filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex gap-2 text-sm justify-center items-center text-neutral-600 dark:text-neutral-300 mt-8 mb-12">
          <CalendarDotsIcon />
          {update_date}
        </div>
        <div>
          <Suspense fallback={<div style={{ height: 400 }} />}>
            <ContentPage slug={slug} />
          </Suspense>
        </div>
      </motion.div>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://blog.zrien7.workers.dev/blog/list", {
    cache: "force-cache",
  });
  const lists = await res.json();
  const slugs = lists.reduce(
    (prev: BlogItem[], l: BlogItem) => [...prev, { slug: l.id }],
    []
  );
  return slugs;
}
