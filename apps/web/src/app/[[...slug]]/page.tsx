import { sanityFetch } from "@company/cms/client/live";
import { getPage, getPageTyped } from "@company/cms/queries/get-page";
import { getPagesSlugs } from "@company/cms/queries/get-pages-slugs";
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
  const { data: page } = await sanityFetch({
    query: getPage,
    params: { slug },
    stega: false,
  });

  return {
    title: page?.seo.title,
    description: page?.seo.title,
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const slug = params.slug ? params.slug.join("/") : "/";

  const response = await sanityFetch({
    query: getPageTyped.query,
    params: { slug },
  });
  const data = getPageTyped.parse(response.data);

  if (!data) {
    notFound();
  }

  return (
    <div>
      <h1>{data.title}</h1>

      {/*<PageBuilder page={data} />*/}
    </div>
  );
}
