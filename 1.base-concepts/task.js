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
	let monthlyPercent = (percent / 100) / 12;  // Преобразуем процент из диапазона 0-100 в диапазон 0-1 и в ежемесячную ставку
	let loanBody = amount - contribution; // тeло кредита
	let payment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
	let totalAmount = payment * countMonths;
	totalAmount = totalAmount.toFixed(2);
	return Number(totalAmount);
}