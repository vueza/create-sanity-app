export const image = /* groq */ `{
  asset,
  hotspot,
  crop,
  "altText": coalesce(asset->altText, ""),
  "lqip": asset->metadata.lqip,
},`;
