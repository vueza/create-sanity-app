import { sanityFetch } from "@company/cms/client/live";
import { getCategoriesSlugs } from "@company/cms/queries/get-categories-slugs";
import { getPostsByCategorySlug } from "@company/cms/queries/get-posts-by-category";
import { Archive } from "@company/ui/components/archive";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: getCategoriesSlugs,
    perspective: "published",
    stega: false,
  });

  return data;
}

const perPage = 10;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  const { data } = await sanityFetch({
    query: getPostsByCategorySlug,
    params: {
      ...params,
      from: 0,
      to: perPage,
    },
    stega: false,
  });

  return {
    title: data.category?.title,
  };
}

export default async function Category(props: Props) {
  const params = await props.params;

  const { data } = await sanityFetch({
    query: getPostsByCategorySlug,
    params: {
      ...params,
      from: 0,
      to: perPage,
    },
    stega: false,
  });

  const total = Math.ceil(data.total / perPage);

  if (!data.category) {
    notFound();
  }

  return (
    <Archive
      title={data.category.title}
      posts={data.posts}
      href={data.category.href}
      total={total}
      page={1}
    />
  );
}
