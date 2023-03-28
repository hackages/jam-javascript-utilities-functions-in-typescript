import {identity} from "../src";

describe("identity", () => {
  it("should return the first argument it receives", () => {
    expect(identity<number>(1)).toEqual(1);
    expect(identity<number>(2)).toEqual(2);
    expect(identity<string>("hello world")).toEqual("hello world");
    expect(identity<Object>({})).toEqual({});
  });

  describe("when called without arguments", () => {
    it("should return undefined ", () => {
      expect(identity()).toEqual(undefined);
    });
  });
});
