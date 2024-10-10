"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const discriminat = b ** 2 - 4 * a * c;

	if (discriminat < 0) {
		return arr;
	}
	if (discriminat === 0) {
		return arr [-b / (2 * a)];
	} else if (discriminat > 0) {
		return arr [
			(-b + Math.sqrt(d)) / (2 * a),
			(-b - Math.sqrt(d)) / (2 * a)
		]
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

}