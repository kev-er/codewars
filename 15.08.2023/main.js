// Task
// DESCRIPTION:
// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

function filterString(str) {
  return parseInt(str.replace(/\D/g, ''), 10);
}

// 2nd way of solving is using isNaN and parseInt 

function filterString(str) {
  let result = ''; 

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i], 10)));
      result += str[i]; 
    )
  }

  return parseInt(result, 10);
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", function() {
  it("should pass some fixed tests", function() {
    assert.strictEqual(filterString("123"), 123, `For the input "123"`);
    assert.strictEqual(filterString("a1b2c3"), 123, `For the input "a1b2c3"`);
    assert.strictEqual(filterString("aa1bb2cc3dd"), 123, `For the input "aa1bb2cc3dd"`);
  });
});


