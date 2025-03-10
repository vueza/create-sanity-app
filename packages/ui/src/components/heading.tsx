import type { GetPageResult } from "@company/cms/types";

interface HeadingProps
  extends Omit<
    Extract<
      NonNullable<GetPageResult>["pageBuilder"][number],
      { _type: "heading" }
    >,
    "_type" | "_key"
  > {}

export const Heading = ({ heading }: HeadingProps) => <h1>{heading}</h1>;
