import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import type { ReactNode } from "react";
import { DraftModeButton } from "../components/draft-mode-button";
import { SanityLive } from "../sanity/live";
import "@company/config-tailwind/app.css";
import { Layout } from "@company/ui/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Company",
    default: "Company",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Layout>{children}</Layout>

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
