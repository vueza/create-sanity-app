import { getPageQuery } from "@company/cms/queries/get-page-query";
import { notFound } from "next/navigation";
import { sanityFetch } from "../../sanity/live";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page(props: Props) {
  const params = await props.params;
  const { data } = await sanityFetch({ query: getPageQuery, params });

  if (!data) {
    notFound();
  }

  return <div>{data.title}</div>;
}
