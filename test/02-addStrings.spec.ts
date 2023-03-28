import {addStrings} from "../src";

describe("addStrings", () => {
  it("should add two strings", () => {
    expect(addStrings("hello", "world")).toEqual("hello world");
  });

  it("should add more than 2 strings", () => {
    expect(addStrings("Hackages", "Learning", "Platform", "or", "Hackages")).toEqual("Hackages Learning Platform or Hackages");
  });
});
