import { getPostQuery } from "@company/cms/queries/get-post-query";
import { Content } from "@company/ui/components/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "../../../sanity/live";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { data: page } = await sanityFetch({
    query: getPostQuery,
    params,
    stega: false,
  });

  return {
    title: page?.seo.title,
    description: page?.seo.title,
  };
}

export default async function Post(props: Props) {
  const params = await props.params;
  const { data } = await sanityFetch({ query: getPostQuery, params });

  if (!data) {
    notFound();
  }

  return (
    <div>
      <h1>{data.title}</h1>

      <Content value={data.content} />
    </div>
  );
}
