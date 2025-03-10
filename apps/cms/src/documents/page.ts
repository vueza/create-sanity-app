import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { withSeo } from "../hoc/with-seo";
import { compose } from "../utils/compose";

export const page = compose(
  defineType,
  withSeo,
)({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      type: "pageBuilder",
    }),
  ],
});
