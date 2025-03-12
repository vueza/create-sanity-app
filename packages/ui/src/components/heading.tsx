import type { GetPageResult } from "@company/cms/types";
import { Container } from "./container";

interface HeadingProps
  extends Omit<
    Extract<
      NonNullable<GetPageResult>["pageBuilder"][number],
      { _type: "heading" }
    >,
    "_type" | "_key"
  > {}

export const Heading = ({ heading }: HeadingProps) => (
  <Container className="p-4">
    <h1>{heading}</h1>
  </Container>
);
