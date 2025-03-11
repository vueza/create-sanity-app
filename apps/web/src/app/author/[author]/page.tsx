import { getAuthorsSlugs } from "@company/cms/queries/get-authors-slugs";
import { getPostsByAuthorSlug } from "@company/cms/queries/get-posts-by-author";
import { Link } from "@company/ui/components/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "../../../sanity/live";

type Props = {
  params: Promise<{ author: string }>;
};

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: getAuthorsSlugs,
    perspective: "published",
    stega: false,
  });

  return data;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { data } = await sanityFetch({
    query: getPostsByAuthorSlug,
    params,
    stega: false,
  });

  return {
    title: `${data.author?.firstName} ${data.author?.lastName}`,
  };
}

export default async function Post(props: Props) {
  const params = await props.params;
  const { data } = await sanityFetch({ query: getPostsByAuthorSlug, params });

  if (!data.author) {
    notFound();
  }

  return (
    <div>
      <h1>
        {data.author.firstName} {data.author.lastName}
      </h1>

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
