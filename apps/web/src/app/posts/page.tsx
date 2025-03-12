import { getPosts } from "@company/cms/queries/get-posts";
import { Archive } from "@company/ui/components/archive";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "../../sanity/live";

export function generateMetadata(): Metadata {
  return {
    title: "Posts",
  };
}

const perPage = 10;

export default async function Post() {
  const { data } = await sanityFetch({
    query: getPosts,
    params: {
      from: 0,
      to: perPage,
    },
  });

  const total = Math.ceil(data.total / perPage);

  if (data.posts.length === 0) {
    notFound();
  }

  return (
    <Archive
      title="Posts"
      posts={data.posts}
      href="/posts"
      total={total}
      page={1}
    />
  );
}
