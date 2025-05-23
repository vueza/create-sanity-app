import {
  type ArrayDefinition,
  type BlockMarksDefinition,
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";
import type { Link } from "../../sanity.types";
import { linkDocumentTypes } from "./link";

const annotations: BlockMarksDefinition["annotations"] = [
  {
    name: "link",
    title: "Link",
    type: "object",
    fields: [
      defineField({
        name: "type",
        title: "Type",
        type: "string",
        options: {
          list: [
            { title: "URL", value: "href" },
            ...linkDocumentTypes.map(({ name, title }) => ({
              title,
              value: name,
            })),
          ],
        },
        validation: (Rule) => Rule.required(),
      }),

      defineField({
        name: "href",
        title: "URL",
        type: "url",
        hidden: ({ parent }) => parent?.type !== "href",
        validation: (Rule) =>
          Rule.uri({
            scheme: ["http", "https", "mailto", "tel"],
            allowRelative: true,
          }).custom((value, context) => {
            const parent = context.parent as Link;
            if (parent?.type === "href" && !value) {
              return "URL is required when type is URL";
            }

            return true;
          }),
      }),

      ...linkDocumentTypes.map(({ name, title }) => {
        return defineField({
          name,
          title,
          type: "reference",
          to: [{ type: name }],
          hidden: ({ parent }) => parent?.type !== name,
          validation: (Rule) =>
            Rule.custom((value, context) => {
              const parent = context.parent as Link;
              if (parent?.type === name && !value) {
                return `Reference is required when type is ${title}`;
              }

              return true;
            }),
        });
      }),
    ],
    validation: (Rule) => Rule.required(),
  },
];

const coreBlocks: ReturnType<typeof defineArrayMember>[] = [
  defineArrayMember({
    type: "block",
    marks: {
      annotations,
    },
  }),

  defineArrayMember({
    type: "image",
    title: "Image",
    validation: (Rule) => Rule.required().assetRequired(),
  }),
];

const availableBlocks: ReturnType<typeof defineArrayMember>[] = [];

const sharedTypeOptions: Omit<ArrayDefinition, "of"> = {
  title: "Content",
  name: "content",
  type: "array",
  validation: (Rule) => Rule.required(),
};

export const content = defineType({
  ...sharedTypeOptions,
  of: [...coreBlocks, ...availableBlocks],
});

export const defineFieldContent = (of: string[]) => {
  return defineField({
    ...sharedTypeOptions,
    of: [...coreBlocks, ...of.map((type) => defineArrayMember({ type }))],
  });
};
