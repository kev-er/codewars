console.log("Hello World!");

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

let number = (a) => a.map((v, i) => `${i + 1}: ${v}`);

// Test Sample:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(number([]), [], "Empty array should return empty array");
    assert.deepEqual(
      number(["a", "b", "c"]),
      ["1: a", "2: b", "3: c"],
      "Return the correct line numbers"
    );
  });
});
