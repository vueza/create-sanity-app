import type { HeadingFragment } from "@company/cms/fragments/heading";
import { Container } from "./container";

export const Heading = ({ heading }: HeadingFragment) => (
  <Container className="p-4">
    <h1>{heading}</h1>
  </Container>
);
