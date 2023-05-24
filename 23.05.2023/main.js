//  Task 

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// - **Parameters**
//   - Inputs
//   - Ask questions
//     - Will it always be a number?
//     - Will it ever be negative?
//     - Any gotchas?

// - **Returns**
//   - Ask questions
//     - Do you want it returned or is a console.log better?
//     - Should I pass a whole array of solutions back or just a single solution?

// - **Examples**
//   - Show a couple black box examples, aka test cases
//     - I pass in these arguments and get these results, is that correct?
//   - Examples are a good idea because "you have the receipts" if the interviewer decides to change things.




// - **Pseudocode**
//   - Write pseudocode of each of the steps

// P


// my function will be named "shortcut" and will have to remove the lowercase vowels (a, e, i, o, u ) in a given string and I don't worry about uppercase vowels. Also y is not considered a vowel for this kata



// R


// Example 

// function shortcut(str) {
//   return str.replace(/[aeiou]/g, '');
// }


// P


// The codeWars 

function shortcut(str) {
  return str.replace(/[aeiou]/g, '');
}




//  The Sample Test 


const strictEqual = require('chai').assert.strictEqual;

function doTest (input, expected) {
  const actual = shortcut(input);
  strictEqual(actual, expected, `for "${input}":\n`);
}

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    doTest('hello', 'hll');
    doTest('how are you today?', 'hw r y tdy?');
    doTest('complain', 'cmpln');
    doTest('never', 'nvr');
  });    
});


// 2nd try to reduce the code via an arrow function 

// const shortcut = (str) => str.replace(/[aeiou]/g, ''); 


