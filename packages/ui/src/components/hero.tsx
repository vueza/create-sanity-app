import type { GetPageResult } from "@company/cms/types";
import { Container } from "./container";
import { Image } from "./image";
import { Link } from "./link";

interface HeroProps
  extends Omit<
    Extract<
      NonNullable<GetPageResult>["pageBuilder"][number],
      { _type: "hero" }
    >,
    "_type" | "_key"
  > {}

export const Hero = ({ title, description, link, image }: HeroProps) => (
  <Container className="p-4">
    <h2>{title}</h2>
    <p>{description}</p>
    <Link {...link} />
    <Image image={image} width={350} height={350} priority={true} />
  </Container>
);
