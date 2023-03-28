import {isArray} from "../src";

describe("isArray", function () {
  const items: Array<number | boolean | string> = [10, false, "Hacklunch"];

  it("should be defined", () => {
    expect(isArray).toBeDefined();
  });

  it("Should return true when passed a collection of elements", () => {
    expect(isArray(items)).toEqual(true);
    expect(isArray([])).toEqual(true);
  });

  it("Should return false when passed anything else", () => {
    expect(isArray("Bootcamp by Hackages")).toEqual(false);
    expect(isArray({})).toEqual(false);
    expect(isArray(12)).toEqual(false);
    expect(isArray(false)).toEqual(false);
  });
});
