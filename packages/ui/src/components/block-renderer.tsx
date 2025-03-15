import { dataAttr } from "@company/cms/client/data-attr";
import type { PageBuilderFragment } from "@company/cms/fragments/page-builder";
import { Content } from "@company/ui/components/content";
import { Heading } from "@company/ui/components/heading";
import { Hero } from "@company/ui/components/hero";
import { type ComponentType, createElement } from "react";

const Blocks: Record<
  PageBuilderFragment["pageBuilder"][number]["_type"],
  // biome-ignore lint/suspicious/noExplicitAny: TODO: Fix types
  ComponentType<any>
> = {
  contentObject: Content,
  hero: Hero,
  heading: Heading,
};

interface BlockRendererProps {
  block: PageBuilderFragment["pageBuilder"][number];
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
