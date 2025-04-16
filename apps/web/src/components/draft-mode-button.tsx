"use client";

import { Button } from "@company/ui/components/button";
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
    <Button
      type="button"
      onClick={async () => {
        await disableDraftMode();
        router.refresh();
      }}
      className="fixed right-4 bottom-4"
    >
      Disable draft mode
    </Button>
  );
};
