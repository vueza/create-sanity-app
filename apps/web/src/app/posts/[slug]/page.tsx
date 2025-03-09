import { getPostQuery } from "@company/cms/queries/get-post-query";
import { notFound } from "next/navigation";
import { sanityFetch } from "../../../sanity/live";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Post(props: Props) {
  const params = await props.params;
  const { data } = await sanityFetch({ query: getPostQuery, params });

  if (!data) {
    notFound();
  }

  return <div>{data.title}</div>;
}
