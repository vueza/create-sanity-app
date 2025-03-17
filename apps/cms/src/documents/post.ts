import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { withSeo } from "../hoc/with-seo";
import { compose } from "../utils/compose";
import { isUnique } from "../utils/is-unique";

const slugRegex = /^[a-z0-9-]+$/;

export const post = compose(
  defineType,
  withSeo,
)({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
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

          if (!slugRegex.test(slug.current)) {
            return "Slug must be lowercase letters, numbers, and dashes.";
          }

          return true;
        }),
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "content",
    }),
  ],
});
