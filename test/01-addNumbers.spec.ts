import {addNumbers} from "../src";

describe("addNumbers", () => {
  it("should add two numbers", () => {
    expect(addNumbers(1, 2)).toEqual(3);
  });

it("should add more than 2 numbers", () => {
    expect(addNumbers(1, 2, 3, 4, 5, 10)).toEqual(25);
  });
});
