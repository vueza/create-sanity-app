import { sanityFetch } from "@company/cms/client/live";
import { getAuthorsSlugs } from "@company/cms/queries/get-authors-slugs";
import { getPostsByAuthorSlug } from "@company/cms/queries/get-posts-by-author";
import { Archive } from "@company/ui/components/archive";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ author: string }>;
};

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: getAuthorsSlugs,
    perspective: "published",
    stega: false,
  });

  return data;
}

const perPage = 10;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  const { data } = await sanityFetch({
    query: getPostsByAuthorSlug,
    params: {
      ...params,
      from: 0,
      to: perPage,
    },
    stega: false,
  });

  return {
    title: `${data.author?.firstName} ${data.author?.lastName}`,
  };
}

export default async function Author(props: Props) {
  const params = await props.params;

  const { data } = await sanityFetch({
    query: getPostsByAuthorSlug,
    params: {
      ...params,
      from: 0,
      to: perPage,
    },
    stega: false,
  });

  const total = Math.ceil(data.total / perPage);

  if (!data.author) {
    notFound();
  }

  return (
    <Archive
      title={`${data.author.firstName} ${data.author.lastName}`}
      posts={data.posts}
      href={data.author.href}
      total={total}
      page={1}
    />
  );
}
