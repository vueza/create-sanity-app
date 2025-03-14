import { sanityFetch } from "@company/cms/client/live";
import { getPostsByAuthorSlug } from "@company/cms/queries/get-posts-by-author";
import { Archive } from "@company/ui/components/archive";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ author: string; page: string }>;
};

const perPage = 10;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const page = Number(params.page);

  const { data } = await sanityFetch({
    query: getPostsByAuthorSlug,
    params: {
      ...params,
      from: (page - 1) * perPage,
      to: page * perPage,
    },
    stega: false,
  });

  return {
    title: `${data.author?.firstName} ${data.author?.lastName} - Page ${page}`,
  };
}

export default async function Author(props: Props) {
  const params = await props.params;
  const page = Number(params.page);

  if (page <= 1) {
    notFound();
  }

  const { data } = await sanityFetch({
    query: getPostsByAuthorSlug,
    params: {
      ...params,
      from: (page - 1) * perPage,
      to: page * perPage,
    },
  });

  const total = Math.ceil(data.total / perPage);

  if (!data.author || data.posts.length === 0) {
    notFound();
  }

  return (
    <Archive
      title={`${data.author.firstName} ${data.author.lastName} - Page ${page}`}
      posts={data.posts}
      href={data.author.href}
      total={total}
      page={page}
    />
  );
}
