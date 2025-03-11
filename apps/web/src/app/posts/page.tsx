import { getPosts } from "@company/cms/queries/get-posts";
import { Link } from "@company/ui/components/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "../../sanity/live";

export function generateMetadata(): Metadata {
  return {
    title: "Posts",
  };
}

export default async function Post() {
  const { data } = await sanityFetch({ query: getPosts });

  if (data.length === 0) {
    notFound();
  }

  return (
    <div>
      <h1>Posts</h1>

      {data.map(({ _id, href, title }) => (
        <div key={_id}>
          <Link href={href}>{title}</Link>
        </div>
      ))}
    </div>
  );
}
