import { defineArrayMember, defineType } from "sanity";

export const pageBuilder = defineType({
  name: "pageBuilder",
  title: "Page builder",
  type: "array",
  options: {
    insertMenu: {
      views: [
        {
          name: "grid",
          previewImageUrl: (schemaTypeName) =>
            `/static/page-builder/${schemaTypeName}.webp`,
        },
      ],
    },
  },
  validation: (Rule) => Rule.required(),

  of: [
    defineArrayMember({ type: "contentObject" }),
    defineArrayMember({ type: "hero" }),
    defineArrayMember({ type: "heading" }),
  ],
});
