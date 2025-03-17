import { describe, expect, it } from "vitest";
import { DOTS_LEFT, DOTS_RIGHT, getPaginationRange } from "./pagination";

describe("getPaginationRange", () => {
  it("should return empty array for total = 0", () => {
    expect(getPaginationRange({ total: 0, page: 1 })).toEqual([]);
  });

  it("should return empty array for negative total", () => {
    expect(getPaginationRange({ total: -5, page: 1 })).toEqual([]);
  });

  it("should handle decimal total by truncating", () => {
    expect(getPaginationRange({ total: 5.7, page: 1 })).toEqual([
      1, 2, 3, 4, 5,
    ]);
  });

  it("should return all pages when total is small", () => {
    expect(getPaginationRange({ total: 5, page: 3 })).toEqual([1, 2, 3, 4, 5]);
  });

  it("should not show left dots when current page is near the beginning", () => {
    const result = getPaginationRange({
      total: 20,
      page: 3,
    });

    expect(result).toEqual([1, 2, 3, 4, 5, DOTS_RIGHT, 20]);
  });

  it("should not show right dots when current page is near the end", () => {
    const result = getPaginationRange({
      total: 20,
      page: 18,
    });

    expect(result).toEqual([1, DOTS_LEFT, 16, 17, 18, 19, 20]);
  });

  it("should show both dots when current page is in the middle", () => {
    const result = getPaginationRange({
      total: 20,
      page: 10,
    });

    expect(result).toEqual([1, DOTS_LEFT, 9, 10, 11, DOTS_RIGHT, 20]);
  });
});
