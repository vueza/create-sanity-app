import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { withSeo } from "../hoc/with-seo";
import { compose } from "../utils/compose";
import { isUnique } from "../utils/is-unique";

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
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "person" }],
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "content",
    }),
  ],
});
