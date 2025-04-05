export const image = /* groq */ `{
  _type,
  asset,
  hotspot,
  crop,
  "altText": coalesce(asset->altText, asset->originalFilename, ""),
  "lqip": asset->metadata.lqip,
},`;
