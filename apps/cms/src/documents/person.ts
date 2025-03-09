import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const person = defineType({
  name: "person",
  title: "Person",
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
  ],
});
