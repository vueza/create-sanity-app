import { CogIcon } from "@sanity/icons";
import type { StructureBuilder, StructureToolOptions } from "sanity/structure";

export const structure: StructureToolOptions = {
  structure: (S: StructureBuilder) =>
    S.list()
      .title("Content")
      .items([
        S.documentTypeListItem("page").title("Pages"),
        S.listItem()
          .title("Posts")
          .child(
            S.list()
              .title("Posts")
              .items([
                S.documentTypeListItem("post").title("Posts"),
                S.documentTypeListItem("author").title("Authors"),
                S.documentTypeListItem("category").title("Categories"),
              ]),
          ),
        S.divider(),
        S.listItem()
          .title("Settings")
          .child(
            S.list()
              .title("Settings")
              .items([
                S.documentTypeListItem("redirect").title("Redirects"),
                S.listItem()
                  .title("Settings")
                  .child(
                    S.document().schemaType("settings").documentId("settings"),
                  )
                  .icon(CogIcon),
              ]),
          ),
      ]),
};
