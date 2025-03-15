export const image = /* groq */ `{
  _type,
  asset,
  hotspot,
  crop,
  "altText": coalesce(asset->altText, ""),
  "lqip": asset->metadata.lqip,
},`;
