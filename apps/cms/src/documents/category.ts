import { TagsIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { isUnique } from "../utils/is-unique";

const slugRegex = /^[a-z0-9-]+$/;

export const category = defineType({
  name: "category",
  title: "Category",
  icon: TagsIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
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
  ],
});
