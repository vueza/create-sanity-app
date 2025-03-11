import { CogIcon } from "@sanity/icons";
import type { StructureBuilder, StructureToolOptions } from "sanity/structure";

export const structure: StructureToolOptions = {
  structure: (S: StructureBuilder) =>
    S.list()
      .title("Content")
      .items([
        S.documentTypeListItem("page"),
        S.listItem()
          .title("Post")
          .child(
            S.list()
              .title("Post")
              .items([
                S.documentTypeListItem("post"),
                S.documentTypeListItem("author"),
                S.documentTypeListItem("category"),
              ]),
          ),
        S.listItem()
          .title("Settings")
          .child(S.document().schemaType("settings").documentId("settings"))
          .icon(CogIcon),
      ]),
};
