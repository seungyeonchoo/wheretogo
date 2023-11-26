const getRate = (rate: number) => {
	const decimal = Number((rate % 1).toFixed(1));
	const integer = rate - decimal;

	const rates = [];

	for (let i = 0; i < integer; i++) {
		rates.push("full");
	}

	if (decimal < 0.5) {
		rates.push("empty");
	} else {
		rates.push("half");
	}

	if (rates.length < 5) {
		for (let j = 0; j < 5 - rates.length; j++) {
			rates.push("empty");
		}
	}

	return rates;
};

export default getRate;
