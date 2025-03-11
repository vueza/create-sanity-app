import { TagsIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { isUnique } from "../utils/is-unique";

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
      validation: (Rule) => Rule.required(),
    }),
  ],
});
