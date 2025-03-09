/** @type {import("syncpack").RcFile} */
export default {
  dependencyTypes: ["**"],
  semverGroups: [
    {
      packages: ["**"],
      dependencyTypes: ["**"],
      dependencies: ["**"],
      range: "",
    },
  ],
  versionGroups: [
    {
      dependencies: ["$LOCAL"],
      dependencyTypes: ["dev", "prod"],
      pinVersion: "workspace:*",
    },
  ],
};
