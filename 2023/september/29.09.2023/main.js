console.log("Hello World!");

/*

DESCRIPTION:
In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!

*/

function solve(s) {
  // finds all numeric substrings in the string
  const numbers = s.match(/\d+/g) || [];
  // reduce to find the max value in the array of numbers.
  return numbers.reduce((max, num) => Math.max(max, Number(num)), 0);
}

// Sample test
const { assert } = require("chai");

describe("Numbers in strings", function () {
  it("Basic tests", function () {
    assert.strictEqual(solve("gh12cdy695m1"), 695);
    assert.strictEqual(solve("2ti9iei7qhr5"), 9);
    assert.strictEqual(solve("vih61w8oohj5"), 61);
    assert.strictEqual(solve("f7g42g16hcu5"), 42);
    assert.strictEqual(solve("lu1j8qbbb85"), 85);
  });
});
