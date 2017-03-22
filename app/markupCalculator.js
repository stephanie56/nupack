/** Markup Calculator **/

module.exports = function (basePrice, numOfWorker, field) {
	var flatRate = 0.05;
  	var labourRate = 0.012;
	var addonRate;

	// Without exception, there is a flat markup on all jobs of 5%
	var flatMarkup = roundNum(basePrice * flatRate); // checked
  	var baseCost = basePrice + flatMarkup;

  // If pharmaceuticals are involved, there is an immediate 7.5% markup
	// For food, there is a 13% markup
	// Electronics require a 2% markup
	// Everything else, there is no markup
	if (field === "drugs"){ addonRate = 0.075; }
	else if (field === "food"){ addonRate = 0.13; }
	else if (field === "electronics"){ addonRate = 0.02; }
	else { addonRate = 0; }

	var addOnMarkup = roundNum(baseCost * addonRate);
  	var labourMarkup = roundNum(baseCost * labourRate * numOfWorker);
  	var result = roundNum(baseCost + addOnMarkup + labourMarkup);

	function roundNum (num){
		 return num = Number(num.toFixed(2));
	};
  
	return result;

};
