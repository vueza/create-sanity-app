import {
  type ArrayDefinition,
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

const coreBlocks = [
  defineArrayMember({ type: "contentObject" }),
  defineArrayMember({ type: "hero" }),
];

const availableBlocks = [defineArrayMember({ type: "heading" })];

const sharedTypeOptions: Omit<ArrayDefinition, "of"> = {
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
};

export const pageBuilder = defineType({
  ...sharedTypeOptions,
  of: [...coreBlocks, ...availableBlocks],
});

export const defineFieldPageBuilder = (of: string[]) => {
  return defineField({
    ...sharedTypeOptions,
    of: of.map((type) => defineArrayMember({ type })),
  });
};
