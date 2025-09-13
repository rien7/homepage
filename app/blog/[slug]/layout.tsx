import { BlogName } from "@/app/_components/VTComponents";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";
import { hash } from "crypto";
import stringToIndex from "@/app/_utils/stringToIndex";

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const colors = [
    "rose",
    "pink",
    "fuchsia",
    "purple",
    "violet",
    "indigo",
    "blue",
    "sky",
    "cyan",
    "teal",
    "emerald",
    "green",
    "lime",
    "yellow",
    "amber",
    "orange",
    "red",
  ];
  // const pageColor = colors[Math.floor(Math.random() * 17)];
  const pageColor = colors[stringToIndex(slug, 17)];
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full px-12 md:px-24 lg:px-28">
        <div className="flex gap-8 justify-center items-center h-12 relative">
          <BlogName name="RieN7" className="block font-mono absolute left-0" />
          <div className="flex items-center gap-2">
            <Link href="/">首页</Link>
          </div>
        </div>
        {children}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`absolute w-full h-96 top-0 left-0 right-0 bg-linear-to-r from-${pageColor}-300/30 to-${pageColor}-100/30 -z-10 mask-b-from-50%`}
        />
      </div>
    </div>
  );
}
