import type { SlugIsUniqueValidator } from "sanity";

const draftsRegex = /^drafts\./;

export const isUnique: SlugIsUniqueValidator = (
  slug,
  { document, getClient },
) => {
  if (!document) {
    return true;
  }

  const id = document._id.replace(draftsRegex, "");

  return getClient({ apiVersion: "2022-12-07" }).fetch(
    `!defined(
      *[
        !(_id in [$draft, $published]) &&
        slug.current == $slug &&
        _type == $type
      ][0]._id
    )`,
    {
      draft: `drafts.${id}`,
      published: id,
      slug,
      type: document._type,
    },
  );
};
