import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { isUnique } from "../utils/is-unique";

export const author = defineType({
  name: "author",
  title: "Author",
  icon: UserIcon,
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => `${doc.firstName} ${doc.lastName}`,
        maxLength: 96,
        isUnique,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
