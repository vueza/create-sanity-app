"use client";

import { dataAttr } from "@company/cms/client/data-attr";
import { useOptimistic } from "next-sanity/hooks";
import { BlockRenderer, type Page } from "./block-renderer";

interface PageBuilderProps {
  page: Page;
}

export function PageBuilder({ page }: PageBuilderProps) {
  const pageBuilderSections = useOptimistic<Page["pageBuilder"], Page>(
    page?.pageBuilder ?? [],
    (sections, action) => {
      if (action.id !== page?._id || !action?.document?.pageBuilder) {
        return sections;
      }

      return action.document.pageBuilder.map(
        (section) => sections?.find((s) => s._key === section?._key) || section,
      );
    },
  );

  if (pageBuilderSections.length === 0) {
    return;
  }

  return (
    <div
      data-sanity={dataAttr({
        id: page._id,
        type: page._type,
        path: "pageBuilder",
      })}
    >
      {pageBuilderSections.map((block) => (
        <BlockRenderer
          key={block._key}
          block={block}
          id={page._id}
          type={page._type}
        />
      ))}
    </div>
  );
}
