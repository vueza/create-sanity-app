import { imageBuilder } from "@company/cms/client/image-builder";
import { sanityFetch } from "@company/cms/client/live";
import { getPage } from "@company/cms/queries/get-page";
import { getPagesSlugs } from "@company/cms/queries/get-pages-slugs";
import { PageBuilder } from "@company/ui/components/page-builder";
import { getImageDimensions } from "@sanity/asset-utils";
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
    { slug: [] },
    ...data
      .filter((page) => page.slug !== "/")
      .map((page) => ({
        slug: page.slug.split("/"),
      })),
  ];
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug ? params.slug.join("/") : "/";
  const { data } = await sanityFetch({
    query: getPage,
    params: { slug },
    stega: false,
  });

  const images = data?.seo?.image?.asset?._ref
    ? [
        {
          url: imageBuilder.image(data.seo.image).auto("format").url(),
          alt: data.seo.image.altText,
          width: getImageDimensions(data.seo.image.asset).width,
          height: getImageDimensions(data.seo.image.asset).height,
        },
      ]
    : [];

  return {
    title: data?.seo.title,
    description: data?.seo.description,
    openGraph: {
      title: data?.seo.title,
      description: data?.seo.description,
      images,
    },
    twitter: {
      images,
    },
    robots: {
      index: data?.seo.index,
      follow: data?.seo.follow,
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const slug = params.slug ? params.slug.join("/") : "/";
  const { data } = await sanityFetch({ query: getPage, params: { slug } });

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
