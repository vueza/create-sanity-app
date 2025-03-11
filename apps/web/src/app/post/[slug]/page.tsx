import { getPost } from "@company/cms/queries/get-post";
import { getPosts } from "@company/cms/queries/get-posts";
import { Content } from "@company/ui/components/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "../../../sanity/live";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: getPosts,
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
