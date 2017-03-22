// This program test Example 1:
// ----------
//     Input:  $1,299.99, 3 people, food
//     Output: $1,591.58

var calculator = require("../app/markupCalculator.js");
var basePrice = 1299.99;
var numOfWorker = 3;
var field = "food";
var expectedResult = 1591.58;
var result = calculator(basePrice, numOfWorker, field);

if(result === expectedResult){
  console.log("Expecting " + expectedResult + ", getting " + result + ". Passed test 1.");
}
else {
  console.log("Expecting " + expectedResult + ", getting " + result + ". Failed test 1.");
}
