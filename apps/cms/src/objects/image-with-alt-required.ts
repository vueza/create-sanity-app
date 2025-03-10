import { type Image, type ValidationContext, defineType } from "sanity";

interface ImageValidationContext extends ValidationContext {
  parent?: Image;
}

export const imageWithAltRequired = defineType({
  name: "imageWithAltRequired",
  title: "Image with Alt",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative Text",
      validation: (Rule) => {
        // @ts-expect-error -- parent is unknown type in ValidationContext
        return Rule.custom((alt, context: ImageValidationContext) => {
          if (context?.parent?.asset?._ref && !alt) {
            return "Alternative Text is required";
          }

          return true;
        });
      },
    },
  ],
  validation: (Rule) => Rule.required().assetRequired(),
});
