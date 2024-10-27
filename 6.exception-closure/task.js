function parseCount(meaning) {
	let result = Number.parseFloat(meaning);
	if (isNaN(result)) {
		throw new Error("Невалидное значение");
	}
	return result;
}
/* Функция `validateCount`:
- Вызывает `parseCount` в блоке `try`.
- Если парсинг проходит успешно, возвращает результат.
- В случае исключения возвращает объект ошибки.
*/
function validateCount(meaning) {
	try {
		return parseCount(meaning);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if ((a + b) < c || (a + c) < b || (b + c) < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
        this.a = a;
		this.b = b;
		this.c = c;
		
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const s = this.perimeter / 2;
		const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
		return Number(area.toFixed(3)); //toFixed возвращает строку, нужно переобразовывать в число
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует"
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			}
		};

	}

}