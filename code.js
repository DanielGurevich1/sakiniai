// // gravity flip 
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673

const flip = (d, a) => {
    const sorted = a.sort((sk1, sk2)=> sk1-sk2);
    return d==='R' ? sorted : sorted.reverse();
}
  

//   function sum(a, b) {
//       return a + b;

//   }

//   const atimtis = function(a, b) {
//       return a-b;
//   }
//   const dalmuo = (a, b) => {
//       return a / b;
//   }

//   const sandauga = (a, b) => a*b;

//   const kavdratu = x => x * x;


// describe("Solution", function() {
//   it("fixed tests", function() {
    console.log(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
    console.log(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
//   });
// });