// This program test Example 1:
// ----------
//     Input:  $1,299.99, 3 people, food
//     Output: $1,591.58

// Example 2:
// ----------
//     Input:  $5,432.00, 1 person, drugs
//     Output: $6,199.81
//
// Example 3:
// ----------
//     Input:  $12,456.95, 4 people, books
//     Output: $13,707.63

var calculator = require("../app/markupCalculator.js");
var test = [
  {
    id:1,
    basePrice: 1299.99,
    numOfWorker: 3,
    field: "food",
    expectedResult: 1591.58,
  },
  {
    id:2,
    basePrice: 5432.00,
    numOfWorker: 1,
    field: "drugs",
    expectedResult: 6199.81,
  },
  {
    id:3,
    basePrice: 12456.95,
    numOfWorker: 4,
    field: "books",
    expectedResult: 13707.63,
  },
];

test.map(function(test){
  var result = calculator(test.basePrice, test.numOfWorker, test.field);
  if(result === test.expectedResult){
    console.log("Expecting " + test.expectedResult + ", getting " + result + ". Passed test " + test.id);
  }
  else {
    console.log("Expecting " + test.expectedResult + ", getting " + result + ". Failed test " + test.id);
  }
});
