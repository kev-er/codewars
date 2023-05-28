// TASK 

// P

// checking if two characters are the same case 
// If either of the characters is not a letter, return -1
//  if both characters are the same case, return 1
// And if both characters are letters, but not the same case, return 0


// R

// Do I need to console.log the result? --> true
// Will it alwasy be number only --> No both number and character 


// E

// function sameCase(a, b){
//     if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
//        return -1
//      }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
//          return 1
//      }else{
//        return 0
//      }
//    }

//    refactored into a arrow function

const sameCase = (a, b) => {
    if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
      return -1;
    } else if (
      (a === a.toLowerCase() && b === b.toLowerCase()) ||
      (a === a.toUpperCase() && b === b.toUpperCase())
    ) {
      return 1;
    } else {
      return 0;
    }
  };
  

  const sameCase = (a, b) => {
    if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toLowerCase()) {
        return -1; 
    } else if (
        (a === a.toLowerCase() && b === b.toLowerCase()) || 
        (a === .toLowerCase() && b === b.toUpperCase())
    ) {
        return 1;
    } else {
        return 0;
    }      
  }

// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


// P



function sameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
       return -1
     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
         return 1
     }else{
       return 0
     }
   }
   
describe("Solution", function() {
  doTest('C', 'B', 1);
  doTest('b', 'a', 1);
  doTest('d', 'd', 1);
  doTest('A', 's', 0);
  doTest('c', 'B', 0);
  doTest('b', 'Z', 0);
  doTest('\t', 'Z', -1);
  doTest('H', ':', -1);
});