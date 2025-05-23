import { dataAttr } from "@company/cms/client/data-attr";
import type { GetPageResult } from "@company/cms/types";
import { type ComponentType, createElement } from "react";
import { Content } from "./content";
import { Heading } from "./heading";
import { Hero } from "./hero";

export type Page = NonNullable<GetPageResult>;

const Blocks: Record<
  Page["pageBuilder"][number]["_type"],
  // biome-ignore lint/suspicious/noExplicitAny: TODO: Fix types
  ComponentType<any>
> = {
  contentObject: Content,
  hero: Hero,
  heading: Heading,
};

interface BlockRendererProps {
  block: Page["pageBuilder"][number];
  id: string;
  type: string;
}

export function BlockRenderer({
  block: { _type, _key, ...blockProps },
  id,
  type,
}: BlockRendererProps) {
  if (!Blocks[_type]) {
    return null;
  }

  return (
    <div
      key={_key}
      data-sanity={dataAttr({
        id,
        type,
        path: `pageBuilder[_key=="${_key}"]`,
      })}
    >
      {createElement(Blocks[_type], blockProps)}
    </div>
  );
}
