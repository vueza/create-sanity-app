import type { GetPageQueryResult } from "@company/cms/types";

interface HeadingProps
  extends Omit<
    Extract<
      NonNullable<GetPageQueryResult>["pageBuilder"][number],
      { _type: "heading" }
    >,
    "_type" | "_key"
  > {}

export const Heading = ({ heading }: HeadingProps) => <h1>{heading}</h1>;
