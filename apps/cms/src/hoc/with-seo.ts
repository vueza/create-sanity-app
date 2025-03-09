import { type DocumentDefinition, defineField } from "sanity";

export const withSeo = (document: DocumentDefinition): DocumentDefinition => ({
  ...document,
  groups: [
    ...(document.groups ?? []),
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    ...document.fields,
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
  ],
});
