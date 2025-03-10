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
      className="fixed bottom-4 right-4 text-white bg-gray-800 rounded-lg hover:bg-gray-700 px-4 py-2" // editorconfig-checker-disable-line
    >
      Disable draft mode
    </button>
  );
};
