console.log("Hello World!");

/*

Given an array of integers, calculate the Average of these numbers.

Main challenge is to write shortest and compact function for it.

For example: var a = [0, 1, 2];
avg(a) // output should be 1
Output of function will be also checked in tests, however most important is to write the shortest possible function (code length < 100). Input will always be valid.

*/

function avg(a) {
  let sum = 0; //  Initialize a variable to store the sum of array elements
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add each element to the sum
  }
  return sum / arr.length; // Add each element to the sum
} // was too long to pass

// Passed the less than 100 lines of code
function avg(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length; // Calculate sum and average in a single line
}

// Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(avg([0, 1, 2, 3, 4]), 2, "returns valid avg number");
  });
});
