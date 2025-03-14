export const image = /* groq */ `{
  asset,
  hotspot,
  crop,
  "altText": coalesce(asset->altText, ""),
  "lqip": coalesce(asset->metadata.lqip, ""),
},`;
