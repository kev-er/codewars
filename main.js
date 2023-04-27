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
  
    // Daily ---> 8kyu

  function hoopCount (n) {
    if (n >= 10) { 
      return("Great, now move on to tricks") }
      else { 
        return ("Keep at it until you get it") }
}
    
    
     // Test 

    const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(hoopCount(3),"Keep at it until you get it" ) 
Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
  });
});


// Daily CodeWars ---> 8kyu

/* DESCRIPTION:

Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

*/ 

function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}