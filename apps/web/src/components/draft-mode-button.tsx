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
      className="fixed right-4 bottom-4 rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700" // editorconfig-checker-disable-line
    >
      Disable draft mode
    </button>
  );
};
