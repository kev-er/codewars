console.log("Hello world!"); 

// Task 

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  let res = [];
  a.forEach( el => !res.includes(el) ? res.push(el) : 0);
  return res;
}

// Test sample 
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("test", () => {
    assert.deepEqual(distinct([1]), [1]);
    assert.deepEqual(distinct([1,2]), [1,2]);
    assert.deepEqual(distinct([1,1,2]), [1,2]);
  });
});

