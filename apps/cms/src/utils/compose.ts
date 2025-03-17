import type { DocumentDefinition } from "sanity";

export const compose = (
  ...functions: ((document: DocumentDefinition) => DocumentDefinition)[]
) => {
  return (document: DocumentDefinition): DocumentDefinition => {
    return functions.reduceRight((result, fn) => fn(result), document);
  };
};
