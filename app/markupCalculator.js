/** Markup Calculator **/

module.exports = function (basePrice, numOfWorker, field) {
	var flatRate = 0.05;
  var labourRate = 0.012;
	var addonRate;

	// Without exception, there is a flat markup on all jobs of 5%
	var flatMarkup = roundNum(basePrice * flatRate);

  // If pharmaceuticals are involved, there is an immediate 7.5% markup
	// For food, there is a 13% markup
	// Electronics require a 2% markup
	// Everything else, there is no markup
	if (field === "drugs"){ addonRate = 0.075; }
	else if (field === "food"){ addonRate = 0.13; }
	else if (field === "electronics"){ addonRate = 0.02; }
	else { addonRate = 0; }

	// For each person that needs to work on the job, there is a markup of 1.2%
	var result = roundNum((basePrice + flatMarkup) * (1 + numOfWorker * labourRate * addonRate));

	function roundNum (num){
		 return num = Number(num.toFixed(2));
	};

	return result;

	// print result
	console.log(result);
};
