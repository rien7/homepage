import { BlogName } from "@/app/_components/VTComponents";
import Link from "next/link";
import React from "react";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full px-12 md:px-24 lg:px-28 z-10">
        <div className="flex gap-8 justify-center items-center h-12 relative">
          <BlogName name="RieN7" className="block font-mono absolute left-0" />
          <div className="flex items-center gap-2">
            <Link href="/">首页</Link>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
