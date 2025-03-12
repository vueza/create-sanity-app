import { Link } from "./link";

export const DOTS_LEFT = "dots-left";
export const DOTS_RIGHT = "dots-right";

export interface PaginationProps {
  href: string;
  total: number;
  page: number;
  siblings?: number;
  boundaries?: number;
}

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, index) => index + start);
}

export function getPaginationRange({
  total,
  page,
  siblings = 1,
  boundaries = 1,
}: PaginationProps): (number | "dots-left" | "dots-right")[] {
  const _total = Math.max(Math.trunc(total), 0);
  if (_total === 0) {
    return [];
  }

  const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
  if (totalPageNumbers >= _total) {
    return range(1, _total);
  }

  const leftSiblingIndex = Math.max(page - siblings, boundaries);
  const rightSiblingIndex = Math.min(page + siblings, _total - boundaries);

  const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
  const shouldShowRightDots = rightSiblingIndex < _total - (boundaries + 1);

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = siblings * 2 + boundaries + 2;
    return [
      ...range(1, leftItemCount),
      DOTS_LEFT,
      ...range(_total - (boundaries - 1), _total),
    ];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = boundaries + 1 + 2 * siblings;
    return [
      ...range(1, boundaries),
      DOTS_LEFT,
      ...range(_total - rightItemCount, _total),
    ];
  }

  return [
    ...range(1, boundaries),
    DOTS_LEFT,
    ...range(leftSiblingIndex, rightSiblingIndex),
    DOTS_RIGHT,
    ...range(_total - boundaries + 1, _total),
  ];
}

export const Pagination = (props: PaginationProps) => {
  const { href } = props;
  const pagination = getPaginationRange(props);

  if (pagination.length <= 1) {
    return;
  }

  return (
    <div className="flex gap-2">
      {pagination.map((item) =>
        item === DOTS_LEFT || item === DOTS_RIGHT ? (
          <span key={item}>...</span>
        ) : (
          <Link key={item} href={`${href}${item > 1 ? `/page/${item}` : ""}`}>
            {item}
          </Link>
        ),
      )}
    </div>
  );
};
