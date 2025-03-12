import type { GetPostsResult } from "@company/cms/types";
import { Link } from "./link";
import { Pagination, type PaginationProps } from "./pagination";

interface ArchiveProps extends PaginationProps {
  title: string;
  posts: GetPostsResult["posts"];
}

export const Archive = ({ title, posts, href, total, page }: ArchiveProps) => (
  <div>
    <h1>{title}</h1>

    {posts.map(({ _id, href, title }) => (
      <div key={_id}>
        <Link href={href}>{title}</Link>
      </div>
    ))}

    <Pagination href={href} total={total} page={page} />
  </div>
);
