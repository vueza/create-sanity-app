import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const redirect = defineType({
  name: "redirect",
  title: "Redirect",
  icon: LinkIcon,
  type: "document",
  fields: [
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "destination",
      title: "Destination",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "permanent",
      title: "Permanent",
      type: "boolean",
    }),
  ],
});
