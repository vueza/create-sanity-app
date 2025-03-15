import { imageBuilder } from "@company/cms/client/image-builder";
import { sanityFetch } from "@company/cms/client/live";
import { getPost } from "@company/cms/queries/get-post";
import { getPostsSlugs } from "@company/cms/queries/get-posts-slugs";
import { Content } from "@company/ui/components/content";
import { getImageDimensions } from "@sanity/asset-utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: getPostsSlugs,
    perspective: "published",
    stega: false,
  });

  return data;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const response = await sanityFetch({
    query: getPost.query,
    params,
    stega: false,
  });
  const data = getPost.parse(response.data);

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

export default async function Post(props: Props) {
  const params = await props.params;
  const response = await sanityFetch({ query: getPost.query, params });
  const data = getPost.parse(response.data);

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
