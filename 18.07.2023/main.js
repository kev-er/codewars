console.log("Hello world"); 

// I will need to find if the array includes items and then find out if it's true or false 

// Solution 
function include(arr, item){
  return arr.includes(item);
}


// Test Sample 
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(include([1,2,3,4], 3), true )
    assert.strictEqual(include([1,2,4,5], 3), false)
    assert.strictEqual(include([], 3),        false)
  });
});
