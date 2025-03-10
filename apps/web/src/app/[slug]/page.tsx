import { getPageQuery } from "@company/cms/queries/get-page-query";
import { notFound } from "next/navigation";
import { PageBuilder } from "../../components/page-builder";
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

  return (
    <div>
      <h1>{data.title}</h1>
      <PageBuilder page={data} />
    </div>
  );
}
