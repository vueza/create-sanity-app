"use client";

import { useIsPresentationTool } from "next-sanity/hooks";
import { useRouter } from "next/navigation";
import { disableDraftMode } from "../actions/draft-mode-disable";

export const DraftModeButton = () => {
  const isPresentationTool = useIsPresentationTool();
  const router = useRouter();

  if (isPresentationTool) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={async () => {
        await disableDraftMode();
        router.refresh();
      }}
    >
      Disable draft mode
    </button>
  );
};
