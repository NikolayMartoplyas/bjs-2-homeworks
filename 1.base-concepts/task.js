"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const discriminat = b ** 2 - 4 * a * c;
	let d = discriminat;

	if (discriminat > 0) {
		return [
			(-b + Math.sqrt(d)) / (2 * a),
			(-b - Math.sqrt(d)) / (2 * a)
		]
	}
	if (discriminat === 0) {
		return [-b / (2 * a)];
	}
	if (discriminat < 0) {
		return [];
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

}