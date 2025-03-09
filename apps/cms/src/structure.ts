import { CogIcon } from "@sanity/icons";
import type { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("page"),
      S.documentTypeListItem("post"),
      S.documentTypeListItem("person"),
      S.listItem()
        .title("Settings")
        .child(S.document().schemaType("settings").documentId("settings"))
        .icon(CogIcon),
    ]);
