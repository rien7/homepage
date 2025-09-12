import { BlogLink } from "../VTComponents";

export type BlogItem = { id: string; name: string; date: number };

export async function BlogList() {
  const data = await fetch("https://blog.zrien7.workers.dev/blog/list", {
    cache: "reload",
    next: {
      revalidate: 60,
    },
  });
  const blogs: BlogItem[] = await data.json();

  return (
    <ul className="list-disc pl-6">
      {blogs.map((p) => (
        <li key={p.id}>
          <BlogLink id={p.id} title={p.name} />
        </li>
      ))}
    </ul>
  );
}
