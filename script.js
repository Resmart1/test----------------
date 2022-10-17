let a = [];
let b = [];
let sumA = [];
let sumB = [];
let n = 0;
let m = 0;
let s = 0;
let lineNumber = 0;
let numberOfLines = 0;
let result = 0;

function countResumes(a, b) {
	sumA = resultArray(a);
	sumB = resultArray(b);
	howMuch(sumA, sumB);
	howMuch(sumB, sumA);
	return result;
}
function howMuch(firstArray, secondArray) {
	let currentResult = 0;
	firstArray.forEach((element, index) => {
		let summa = s;
		if (summa >= element) {
			currentResult = index + 1;
			summa = summa - element;
			secondArray.forEach(element => {
				if (summa >= element) {
					currentResult++;
				}
			});
		}
		if (currentResult > result) { result = currentResult; }
	});
}
function resultArray(array) {
	let newArray = [];
	let sum = s;
	prevElement = 0;
	array.forEach(element => {
		if (sum > element) {
			prevElement = element + prevElement;
			newArray.push(prevElement);
			sum = sum - element;
		}
		else {
			sum = 0;
		}
	});
	return newArray;
}

const readline = require('readline').createInterface(process.stdin, process.stdout);
readline.on('line', (line) => {
	let lineContent = line.split(' ');
	if (lineNumber === 0) {
		n = lineContent[0];
		m = lineContent[1];
		s = lineContent[2];
		numberOfLines = n > m ? n : m;
	}
	else {
		if (lineNumber <= n) {
			a.push(Number(lineContent[0]));
		}
		if (lineNumber <= m) {
			b.push(Number(lineContent[1]));
		}
	}
	lineNumber++;

	if (lineNumber <= numberOfLines) { return; }

	if (lineNumber > 1) {
		console.log(String(countResumes(a, b)));
	}
	else {
		return 0;
	}

	readline.close();
}).on('close', () => {
	process.exit(0)
});