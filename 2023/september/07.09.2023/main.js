// Task 

/*

Output
Yup!! The problem name reflects your task; just add a set of numbers. But you may feel yourselves condescended, to write a program just to add a set of numbers. Such a problem will simply question your erudition. So, let's add some flavor of ingenuity to it. Addition operation requires cost now, and the cost is the summation of those two to be added. So, to add 1 and 10, you need a cost of 11. If you want to add 1, 2 and 3, there are several ways:

1 + 2 = 3, cost = 3,
3 + 3 = 6, cost = 6,
Total = 9.
1 + 3 = 4, cost = 4,
2 + 4 = 6, cost = 6,
Total = 10.
2 + 3 = 5, cost = 5,
1 + 5 = 6, cost = 6,
Total = 11.
I hope you have understood already your mission: to add a set of integers so that the cost is minimal.

Your Task
Given a vector of integers, return the minimum total cost of addition.

*/ 

function addAll(numbers) {
  // Sort the input array in ascending order.
  numbers.sort((a, b) => a - b);
  
  let cost = 0;

  // While there are at least two numbers in the array.
  while (numbers.length > 1) {
    // Extract the two smallest numbers.
    const num1 = numbers.shift();
    const num2 = numbers.shift();

    // Calculate the sum and add it to the cost.
    const sum = num1 + num2;
    cost += sum;

    // Insert the sum back into the array, maintaining sorted order.
    let index = 0;
    while (index < numbers.length && numbers[index] < sum) {
      index++;
    }
    numbers.splice(index, 0, sum);
  }

  return cost;
}

// Example usage:
const numbers = [1, 2, 3];
console.log("Minimum Total Cost:", addAll(numbers)); // Output: 9

// Export the function for testing.
module.exports = { addAll };


// Test 
const {assert} = require('chai');

describe('Tests', () => {
  function test(numbers, expected) {
    assert.strictEqual(addAll(numbers), expected, `Test failed for [${numbers}]`);
  }

  it('Sample Tests', () => {
    test([1, 2, 3], 9);
    test([1, 2, 3, 4], 19);
    test([1, 2, 3, 4, 5], 33);
  });
});
