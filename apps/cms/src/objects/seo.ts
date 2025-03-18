import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  icon: TextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "index",
      type: "boolean",
      title: "Index",
      initialValue: true,
    }),

    defineField({
      name: "follow",
      type: "boolean",
      title: "Follow",
      initialValue: true,
    }),
  ],
  options: {
    collapsible: true,
  },
  validation: (Rule) => Rule.required(),
});
