"use client";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export function BlogTitle({ id, title }: { id: string; title: string }) {
  return (
    <ViewTransition name={`blog-title-${id.replace(/[^a-zA-Z0-9_-]/g, "-")}`}>
      <div className="text-xl font-bold">{title}</div>
    </ViewTransition>
  );
}

export function BlogLink({ id, title }: { id: string; title: string }) {
  return (
    <ViewTransition name={`blog-title-${id.replace(/[^a-zA-Z0-9_-]/g, "-")}`}>
      <Link
        href={`/blog/${id}`}
        prefetch={true}
        className="underline underline-offset-4"
      >
        {title}
      </Link>
    </ViewTransition>
  );
}
