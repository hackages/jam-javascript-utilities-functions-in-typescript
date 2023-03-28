import {last} from "../src";

describe("last", () => {
  const items: Array<number | string> = [1, 9, 10, "Hackages"];

  it("Should return the last element of the collection", () => {
    expect(last(items)).toEqual("Hackages");
  });

  it("Should return the last n elements when a second argument is passed", () => {
    expect(last(items, 0)).toEqual("Hackages");
    expect(last(items, 1)).toEqual(["Hackages"]);
    expect(last(items, 2)).toEqual([10, "Hackages"]);
  });
});
