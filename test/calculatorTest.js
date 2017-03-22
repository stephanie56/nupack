var expect = require("chai").expect;
var calculator = require("../app/markupCalculator.js");

describe('calculator', function(){
  it('returns final cost', function(){
    var basePrice = calculator.returnCost("1,299.99");
    var numOfWorker = calculator.returnCost("3"); ;
    var field = calculator.returnCost("food"); ;

  });
});
