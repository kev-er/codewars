// Taks 

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumOfNumbers(arr) {
  return arr.reduce((acc, curr) => acc + Number(curr), 0);
}

// 2nd try and test 

function sumArrayValues(arr) {
  return arr.reduce((acc, val) => acc + Number(val), 0);
}

console.log(sumArrayValues(['10', '20', 30, '40'])); // Output: 100


// I could have used x.map 

// function sumMix(x){
//   return x.map(a => +a).reduce((a, b) => a + b);
// }