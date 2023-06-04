function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let avg = 0;
	let sum = 0;

	if (arr.length == 0) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
			}
			if (arr[i] > max) {
				max = arr[i];
			}
			sum += arr[i];
		}
		avg = Number((sum / arr.length).toFixed(2));
		return {
			min: min,
			max: max,
			avg: avg
		};
	}
}

getArrayParams(1, 2, 3, 4, 5, 6, 7, 10, 11, 12);

function summElementsWorker(...arr) {
	let sum = 0;
	if (arr.length == 0) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum;
	}
}

function differenceMaxMinWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;

	if (arr.length == 0) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
			}
			if (arr[i] > max) {
				max = arr[i];
			}
		}
		return max - min;
	}
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0; //Четные
	let sumOddElement = 0; //Нечетные

	if (arr.length == 0) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if ((arr[i] % 2) === 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		}
		return sumEvenElement - sumOddElement;
	}
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	if (arr.length == 0) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if ((arr[i] % 2) === 0) {
				sumEvenElement += arr[i];
				countEvenElement += 1;
			}
		}
		return sumEvenElement / countEvenElement;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let workerResult = func(...arrOfArr[i]);
		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;
		}
	}
	return maxWorkerResult;
}