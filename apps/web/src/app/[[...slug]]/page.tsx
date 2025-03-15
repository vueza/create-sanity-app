import { sanityFetch } from "@company/cms/client/live";
import { getPage } from "@company/cms/queries/get-page";
import { getPagesSlugs } from "@company/cms/queries/get-pages-slugs";
import { PageBuilder } from "@company/ui/components/page-builder";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: getPagesSlugs,
    perspective: "published",
    stega: false,
  });

  return [
    { params: { slug: undefined } },
    ...data.map((page) => ({
      params: { slug: page.slug.split("/") },
    })),
  ];
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug ? params.slug.join("/") : "/";
  const response = await sanityFetch({
    query: getPage.query,
    params: { slug },
    stega: false,
  });
  const data = getPage.parse(response.data);

  return {
    title: data?.seo.title,
    description: data?.seo.title,
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const slug = params.slug ? params.slug.join("/") : "/";
  const response = await sanityFetch({
    query: getPage.query,
    params: { slug },
  });
  const data = getPage.parse(response.data);

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
