const { reconstruct } = require("../index");

/*
 * strings could be
 * 1. an array of strings
 * 2. a string
 *
 * values could be
 * - undefined
 * - an array of strings
 * - an array of functions (that return a string)
 * - an array of both strings and functions
 */

// * If strings is of type string, values should be undefined.

describe("reconstruct util function", () => {
  it("renders the right string given various inputs", () => {
    expect(reconstruct(["test"], ["string"])).toBe("test string");
    expect(reconstruct("hi")).toBe("hi");

    const complex = {
      strings: ["Hello.", "are", "today?"],
      values: ["How", "you"]
    };
    expect(reconstruct(complex.strings, complex.values)).toBe(
      "Hello. How are you today?"
    );
  });
  it("correctly handles undefined or primitive values", () => {
    expect(reconstruct("Hello")).toBe("Hello");
    expect(reconstruct(["a", "b"], undefined)).toBe("a b");
  });
});
