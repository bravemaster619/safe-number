import { expect } from "chai";
import { safeNumber } from "../safe-number";

describe("safeNumber", () => {
  it("should return number", () => {
    const number = 6.19;
    expect(safeNumber(number)).to.equal(number);
  });
  it("should return default value if given number is below zero", () => {
    const number = -6.19;
    const defaultValue = 12.17;
    expect(safeNumber(number, defaultValue)).to.equal(defaultValue);
  });
  it("should allow negative value if third parameter is true", () => {
    const number = -6.19;
    const defaultValue = 12.17;
    expect(safeNumber(number, defaultValue, true)).to.equal(number);
  });
});