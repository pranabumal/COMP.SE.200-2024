import capitalize from "../src/capitalize";
import isEmpty from "../src/isEmpty";
import isSymbol from "../src/isSymbol";
import filter from "../src/filter";
import map from "../src/map";
import toNumber from "../src/toNumber";
import isObject from "../src/isObject";
import ceil from "../src/ceil";
import clamp from "../src/clamp";
import reduce from "../src/reduce";
import eq from "../src/eq";

describe("Library Tests", () => {
    
  // Eq.js
  describe("eq", () => {
    it("should return true for equal primitive values", () => {
      expect(eq(5, 5)).toBe(true);
    });

    it("should return false for unequal primitive values", () => {
      expect(eq(5, 3)).toBe(false);
    });

    it("should return true for equal objects with same properties", () => {
      expect(eq({a: 1}, {a: 1})).toBe(true);
    });

    it("should return false for unequal objects", () => {
      expect(eq({a: 1}, {b: 2})).toBe(false);
    });
  });

  // Capitalize.js
  describe("capitalize", () => {
    it("should capitalize the first letter of a string", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    it("should return the same string if the first letter is already uppercase", () => {
      expect(capitalize("Hello")).toBe("Hello");
    });

    it("should handle empty string correctly", () => {
      expect(capitalize("")).toBe("");
    });
  });

  // IsEmpty.js
  describe("isEmpty", () => {
    it("should return true for null", () => {
      expect(isEmpty(null)).toBe(true);
    });

    it("should return true for undefined", () => {
      expect(isEmpty(undefined)).toBe(true);
    });

    it("should return true for empty arrays", () => {
      expect(isEmpty([])).toBe(true);
    });

    it("should return false for non-empty arrays", () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
    });

    it("should return true for empty objects", () => {
      expect(isEmpty({})).toBe(true);
    });

    it("should return false for non-empty objects", () => {
      expect(isEmpty({a: 1})).toBe(false);
    });
  });

  // Filter.js
  describe("filter", () => {
    it("should filter array correctly based on condition", () => {
      expect(filter([1, 2, 3, 4], x => x % 2 === 0)).toEqual([2, 4]);
    });

    it("should return empty array if no elements match the condition", () => {
      expect(filter([1, 3, 5], x => x % 2 === 0)).toEqual([]);
    });

    it("should handle an empty array", () => {
      expect(filter([], x => x > 0)).toEqual([]);
    });
  });

  // Map.js
  describe("map", () => {
    it("should transform each element correctly", () => {
      expect(map([1, 2, 3], x => x * 2)).toEqual([2, 4, 6]);
    });

    it("should handle an empty array", () => {
      expect(map([], x => x * 2)).toEqual([]);
    });

    it("should return original array if no transformation is applied", () => {
      expect(map([1, 2, 3], x => x)).toEqual([1, 2, 3]);
    });
  });

  // ToNumber.js
  describe("toNumber", () => {
    it("should convert string to number", () => {
      expect(toNumber("123")).toBe(123);
    });

    it("should return NaN for invalid number string", () => {
      expect(toNumber("abc")).toBeNaN();
    });

    it("should return 0 for null", () => {
      expect(toNumber(null)).toBe(0);
    });
  });

  // IsObject.js
  describe("isObject", () => {
    it("should return true for plain objects", () => {
      expect(isObject({})).toBe(true);
    });

    it("should return false for non-objects", () => {
      expect(isObject(123)).toBe(false);
      expect(isObject("test")).toBe(false);
    });
  });

  // IsSymbol.js
  describe("isSymbol", () => {
    it("should return true for Symbol", () => {
      expect(isSymbol(Symbol("test"))).toBe(true);
    });

    it("should return false for non-symbol values", () => {
      expect(isSymbol(123)).toBe(false);
      expect(isSymbol("test")).toBe(false);
    });
  });

  // Ceil.js
  describe("ceil", () => {
    it("should return the smallest integer greater than or equal to the number", () => {
      expect(ceil(4.2)).toBe(5);
    });

    it("should handle negative numbers", () => {
      expect(ceil(-4.2)).toBe(-4);
    });

    it("should return integer when the input is already an integer", () => {
      expect(ceil(5)).toBe(5);
    });
  });

  // Clamp.js
  describe("clamp", () => {
    it("should return the number if it is within the range", () => {
      expect(clamp(5, 1, 10)).toBe(5);
    });

    it("should return the lower bound if the number is less than the range", () => {
      expect(clamp(0, 1, 10)).toBe(1);
    });

    it("should return the upper bound if the number is greater than the range", () => {
      expect(clamp(15, 1, 10)).toBe(10);
    });
  });

  // Reduce.js
  describe("reduce", () => {
    it("should return the sum of the elements in the array", () => {
      expect(reduce([1, 2, 3], (acc, curr) => acc + curr, 0)).toBe(6);
    });

    it("should handle empty array", () => {
      expect(reduce([], (acc, curr) => acc + curr, 0)).toBe(0);
    });

    it("should handle array with single element", () => {
      expect(reduce([5], (acc, curr) => acc + curr, 0)).toBe(5);
    });
  });

});

