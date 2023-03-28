import {isNumber} from "../src";

describe("isNumber", () => {
  it("Should return true when passed any number", function () {
    expect(isNumber(12)).toEqual(true);
    expect(isNumber(1.2)).toEqual(true);
    expect(isNumber(12)).toEqual(true);
    expect(isNumber(0)).toEqual(true);
    expect(isNumber(-10)).toEqual(true);
    expect(isNumber(NaN)).toEqual(true);
  });

  it("Should return false otherwise", function () {
    expect(isNumber({})).toEqual(false);
    expect(isNumber([])).toEqual(false);
    expect(isNumber("")).toEqual(false);
    expect(isNumber("string")).toEqual(false);
    expect(isNumber("12")).toEqual(false);
  });
});
