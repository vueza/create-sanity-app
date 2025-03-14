import { sanityFetch } from "@company/cms/client/live";
import { getPostsByCategorySlug } from "@company/cms/queries/get-posts-by-category";
import { Archive } from "@company/ui/components/archive";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ category: string; page: string }>;
};

const perPage = 10;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const page = Number(params.page);

  const { data } = await sanityFetch({
    query: getPostsByCategorySlug,
    params: {
      ...params,
      from: (page - 1) * perPage,
      to: page * perPage,
    },
    stega: false,
  });

  return {
    title: `${data.category?.title} - Page ${page}`,
  };
}

export default async function Category(props: Props) {
  const params = await props.params;
  const page = Number(params.page);

  if (page <= 1) {
    notFound();
  }

  const { data } = await sanityFetch({
    query: getPostsByCategorySlug,
    params: {
      ...params,
      from: (page - 1) * perPage,
      to: page * perPage,
    },
  });

  const total = Math.ceil(data.total / perPage);

  if (!data.category || data.posts.length === 0) {
    notFound();
  }

  return (
    <Archive
      title={`${data.category.title} - Page ${page}`}
      posts={data.posts}
      href={data.category.href}
      total={total}
      page={page}
    />
  );
}
