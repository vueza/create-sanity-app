import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import type { ReactNode } from "react";
import { DraftModeButton } from "../components/draft-mode-button";
import { SanityLive } from "../sanity/live";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en">
      <body>
        {children}

        {isDraftMode && (
          <>
            <DraftModeButton />
            <VisualEditing />
          </>
        )}

        <SanityLive />
      </body>
    </html>
  );
}
