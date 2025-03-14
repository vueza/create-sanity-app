import { sanityFetch } from "@company/cms/client/live";
import { getPosts } from "@company/cms/queries/get-posts";
import { Archive } from "@company/ui/components/archive";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ page: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const page = Number(params.page);

  return {
    title: `Posts - Page ${page}`,
  };
}

const perPage = 10;

export default async function Post(props: Props) {
  const params = await props.params;
  const page = Number(params.page);

  if (page <= 1) {
    notFound();
  }

  const { data } = await sanityFetch({
    query: getPosts,
    params: {
      from: (page - 1) * perPage,
      to: page * perPage,
    },
  });

  const total = Math.ceil(data.total / perPage);

  if (data.posts.length === 0) {
    notFound();
  }

  return (
    <Archive
      title={`Posts - Page ${page}`}
      posts={data.posts}
      href="/posts"
      total={total}
      page={page}
    />
  );
}
