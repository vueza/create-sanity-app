import type { GetPageQueryResult } from "@company/cms/types";
import { Image } from "./image";
import { Link } from "./link";

interface HeroProps
  extends Omit<
    Extract<
      NonNullable<GetPageQueryResult>["pageBuilder"][number],
      { _type: "hero" }
    >,
    "_type" | "_key"
  > {}

export const Hero = ({ title, description, link, image }: HeroProps) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <Link {...link} />
    <Image image={image} width={350} height={350} />
  </div>
);
