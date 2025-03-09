"use server";

import { draftMode } from "next/headers";

export async function disableDraftMode() {
  const draft = await draftMode();
  draft.disable();
}
