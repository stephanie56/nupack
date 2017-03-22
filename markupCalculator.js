/** Markup Calculator **/

// User story 1: Without exception, there is a flat markup on all jobs of 5% -> basePrice * 1.05
// User story 2: For each person that needs to work on the job, there is a markup of 1.2%  -> basePrice * 1.05 * 1.012 * numOfWorkers
// User story 3: Markups are also added depending on the types of materials involved:
//
// * If pharmaceuticals are involved, there is an immediate 7.5% markup
// * For food, there is a 13% markup
// * Electronics require a 2% markup
// * Everything else, there is no markup

// User story 4: The markup calculator should accept the (1)initial base price (2) along with the different categories of markups and calculate a final cost for a project.

var basePrice = Number(process.argv[2]);
var numOfWorker = Number(process.argv[3]);
var field = process.argv[4];

function markupCalculator (basePrice, numOfWorker, field) {
	var flatRate = 5;
  var labourRate = 1.2;
	var addonRate;

	// Without exception, there is a flat markup on all jobs of 5%
	var flatMarkup = roundNum(price * (100 + flatRate) / 100);
	// For each person that needs to work on the job, there is a markup of 1.2%
	var result = roundNum(flatMarkup * numOfWorker * (100 + labourRate) / 100);

	console.log(result);
};

function roundNum (num){
	 return num = Number(num.toFixed(2));
}

calculator(basePrice, numOfWorker, field);
