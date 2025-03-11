import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { withSeo } from "../hoc/with-seo";
import { compose } from "../utils/compose";

const slugRegex = /^[a-z]+(-[a-z]+|\/[a-z]+)*$/;

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
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          if (!slug?.current) {
            return "Required";
          }

          if (slug.current === "/") {
            return true;
          }

          if (!slugRegex.test(slug.current)) {
            return "Slug must be lowercase letters, dashes, and slashes.";
          }

          return true;
        }),
    }),

    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      type: "pageBuilder",
    }),
  ],
});
