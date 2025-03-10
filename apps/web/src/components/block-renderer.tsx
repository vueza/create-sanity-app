import type { GetPageResult } from "@company/cms/types";
import { Heading } from "@company/ui/components/heading";
import { Hero } from "@company/ui/components/hero";
import { type ComponentType, createElement } from "react";
import { dataAttr } from "../sanity/data-attr";

export type Page = NonNullable<GetPageResult>;

const Blocks: Record<
  Page["pageBuilder"][number]["_type"],
  // biome-ignore lint/suspicious/noExplicitAny: TODO: Fix types
  ComponentType<any>
> = {
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
