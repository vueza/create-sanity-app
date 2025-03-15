import type { HeroFragment } from "@company/cms/fragments/hero";
import { Container } from "./container";
import { Image } from "./image";
import { Link } from "./link";

export const Hero = ({ title, description, link, image }: HeroFragment) => (
  <Container className="p-4">
    <h2>{title}</h2>
    <p>{description}</p>
    <Link {...link} />
    <Image image={image} width={350} height={350} priority={true} />
  </Container>
);
