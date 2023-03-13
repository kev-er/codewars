console.log('Check!')

// DAY 1 ---> STRINGS 8kyu

function areYouPlayingBanjo(name) {
    if (name [0].toLowerCase() === 'r') {
        return name + ' plays banjo'; 
    } else {
        return name + ' does not play banjo'; 
    }
}


  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold=0;
  
  describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
      assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
      assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
      assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
      assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
      })
    })
  