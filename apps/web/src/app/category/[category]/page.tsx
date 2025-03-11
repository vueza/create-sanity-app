import { getCategories } from "@company/cms/queries/get-categories";
import { getPostsByCategorySlug } from "@company/cms/queries/get-posts-by-category";
import { Link } from "@company/ui/components/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "../../../sanity/live";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: getCategories,
    perspective: "published",
    stega: false,
  });

  return data;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { data } = await sanityFetch({
    query: getPostsByCategorySlug,
    params,
    stega: false,
  });

  return {
    title: data.category?.title,
  };
}

export default async function Post(props: Props) {
  const params = await props.params;
  const { data } = await sanityFetch({ query: getPostsByCategorySlug, params });

  if (!data?.category) {
    notFound();
  }

  return (
    <div>
      <h1>{data.category.title}</h1>

      {data.posts.length > 0 ? (
        <div>
          {data.posts.map(({ _id, href, title }) => (
            <div key={_id}>
              <Link href={href}>{title}</Link>
            </div>
          ))}
        </div>
      ) : (
        <div>No posts found</div>
      )}
    </div>
  );
}
