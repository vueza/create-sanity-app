import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "link",
      title: "Link",
      type: "linkRequired",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "imageWithAltRequired",
      validation: (Rule) => Rule.required().assetRequired(),
    }),
  ],
  validation: (Rule) => Rule.required(),
});
