import { imageBuilder } from "@company/cms/client/image-builder";
import { sanityFetch } from "@company/cms/client/live";
import { getPost } from "@company/cms/queries/get-post";
import { getPostsSlugs } from "@company/cms/queries/get-posts-slugs";
import { Content } from "@company/ui/components/content";
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
  const { data } = await sanityFetch({
    query: getPost,
    params,
    stega: false,
  });

  return {
    title: data?.seo.title,
    description: data?.seo.title,
    openGraph: {
      title: data?.seo.title,
      description: data?.seo.title,
      images: data?.seo?.image?.asset?._ref
        ? { url: imageBuilder.image(data.seo.image).auto("format").url() }
        : [],
    },
    robots: {
      index: data?.seo.index,
      follow: data?.seo.follow,
    },
  };
}

export default async function Post(props: Props) {
  const params = await props.params;
  const { data } = await sanityFetch({ query: getPost, params });

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
