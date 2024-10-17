function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	if (arr1.every((element, index) => element === arr2[index])) {
		return true
	} else {
		return false;
	}

}

function getUsersNamesInAgeRange(users, gender) {
	return users
		.filter(user => user.gender === gender)
		.map(user => user.age)
		.reduce((acc, age, index, array) => {
			acc += age;
			if (index === array.length - 1) {
				return acc / array.length;
			}
			return acc;
		}, 0);

	if (users.length === 0) {
		return 0;
	}
	if (gender !== "мужской" || gender !== "женский") {
		return 0;
	}

}