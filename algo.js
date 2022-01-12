const listFirst1 = [10, 15, 3, 7];
const listFirst2 = [1, 8, 10, 21];
const listSecond3 = [3, 7, 8, 3, 6, 1];
const listSecond4 = [1, 4, 5, 8];

const firstExercise = (array, k) => {
	for (i = 0; i < array.length; i++) {
		for (j = i; j < array.length; j++) {
			if (array[i] + array[j] === k) {
				return true;
			}
		}
	}
	return false;
};

// console.log(firstExercise(listFirst1, 17));
// console.log(firstExercise(listFirst2, 19));

const secondExercise = (array) => {
	let count = 0;
	for (i = 0; i < array.length; i++) {
		let counter = 0;
		let c = i + 1;
		for (j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) counter++;
		}
		if (counter == array.length - c) count++;
	}
	return count;
};

// Tester avec le booléen à la place du counter

// console.log(secondExercise(listSecond3));
// console.log(secondExercise(listSecond4));

const thirdExercise = (array, k) => {
	let arr = [];
	while (array.length != 0) {
		for (i = 0; i < array.length; i++) {
			arr.push(array[0] + array[i + 1]);
		};
		if (arr.includes(k)) {
			return true;
		} else {
			array.splice(0, 1);
		}
	}
	return false;
};

// console.log(thirdExercise(listFirst1, 17));
// console.log(thirdExercise(listFirst2, 19));

const fourthExercise = (array) => {
	let arr = [];
	let count = 0;
	while (array.length != 0) {
		for (i = 0; i < array.length; i++) {
			count = 0;
			if (array[0] < array[i]) {
				array.splice(0, 1);
				break;
			}
			count++;
		}
		if (count > 0) arr.push(array[0]) && array.splice(0, 1);
	}
	return arr.length;
};

// console.log(fourthExercise(listSecond3));
// console.log(fourthExercise(listSecond4));

const fifthExercise = (array, k) => {
	let arrayTemp = [];
	for (i = 0; i < array.length; i++) {
		let count = k - array[i];
		if (arrayTemp[count] !== undefined) {
			return true;
		} else {
			arrayTemp[array[i]] = "done";
		}
	}
	return false;
};

// console.log(fifthExercise(listFirst1, 17));
// console.log(fifthExercise(listFirst2, 19));

const sixthExercise = (array) => {
	let result = 0;
	for (i = 0; i < array.length; i++) {
		arrayNew = array.slice(i + 1);
		if (Math.max(...arrayNew) < array[i]) {
			result += 1;
		}
	}
	return result;
};

// console.log(sixthExercise(listSecond3));
// console.log(sixthExercise(listSecond4));
