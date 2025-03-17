import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { withSeo } from "../hoc/with-seo";
import { compose } from "../utils/compose";
import { isUnique } from "../utils/is-unique";

const slugRegex = /^[a-z0-9]+(-[a-z0-9]+|\/[a-z0-9]+)*$/;

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
        isUnique,
      },
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          if (!slug?.current) {
            return true;
          }

          if (slug.current === "/") {
            return true;
          }

          if (!slugRegex.test(slug.current)) {
            return "Slug must be lowercase letters, numbers, dashes, and slashes.";
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
