import type { DocumentDefinition } from "sanity";

export const compose =
  (...rest: ((arg: DocumentDefinition) => DocumentDefinition)[]) =>
  (x: DocumentDefinition) =>
    rest.reduceRight((y, f) => f(y), x);
