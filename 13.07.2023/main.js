// Daily codewars 


// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }

// Examples
console.log(isUpperCase("c")); // False
console.log(isUpperCase("C")); // True
console.log(isUpperCase("hello I AM DONALD")); // False
console.log(isUpperCase("HELLO I AM DONALD")); // True
console.log(isUpperCase("ACSKLDFJSgSKLDFJSKLDFJ")); // False
console.log(isUpperCase("ACSKLDFJSGSKLDFJSKLDFJ")); // True






// Test Sample 

// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("should test for something", function() {
    // Test.assertEquals(1 + 1, 2);
    // assert.strictEqual(1 + 1, 2);
  });
});
