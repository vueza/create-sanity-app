import { defineField, defineType, type Rule } from "sanity";
import type { Link } from "../../sanity.types";

export const linkDocumentTypes = [
  {
    name: "page",
    title: "Page",
  },
  {
    name: "post",
    title: "Post",
  },
];

export const link = defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "children",
      title: "Label",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as Link;
          if (parent?.type && !value) {
            return "Label is required when type exists";
          }

          return true;
        }),
    }),

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
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as Link;
          if (parent?.children && !value) {
            return "Type is required when label exists";
          }

          return true;
        }),
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
});

export const linkRequiredValidation = (Rule: Rule) =>
  Rule.required().custom((value: Link) => {
    if (!value) {
      return true;
    }

    if (!(value.children && value.type)) {
      return "Required";
    }

    if (value.type === "href" && !value.href) {
      return "Required";
    }

    if (value.type && !value[value.type]) {
      return "Required";
    }

    return true;
  });
