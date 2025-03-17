import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { isUnique } from "../utils/is-unique";

const slugRegex = /^[a-z0-9-]+$/;

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
