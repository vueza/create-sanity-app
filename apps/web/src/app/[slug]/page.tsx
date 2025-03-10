import { getPageQuery } from "@company/cms/queries/get-page-query";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageBuilder } from "../../components/page-builder";
import { sanityFetch } from "../../sanity/live";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { data: page } = await sanityFetch({
    query: getPageQuery,
    params,
    stega: false,
  });

  return {
    title: page?.seo.title,
    description: page?.seo.title,
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { data } = await sanityFetch({ query: getPageQuery, params });

  if (!data) {
    notFound();
  }

  return (
    <div>
      <h1>{data.title}</h1>

      <PageBuilder page={data} />
    </div>
  );
}
