import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import type { ReactNode } from "react";
import { DraftModeButton } from "../components/draft-mode-button";
import "@company/config-tailwind/app.css";
import { SanityLive, sanityFetch } from "@company/cms/client/live";
import { getSettings } from "@company/cms/queries/get-settings";
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
  const { data } = await sanityFetch({
    query: getSettings,
  });

  if (!data) {
    return null;
  }

  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Company" />
      </head>
      <body className="isolate flex min-h-screen flex-col">
        <Layout title={data.title}>{children}</Layout>

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
