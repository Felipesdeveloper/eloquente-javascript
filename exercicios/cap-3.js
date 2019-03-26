function min(number1, number2) {
	return Math.min(number1, number2);
}

console.log(min(0, 10)); // 0
console.log(min(0, -10)); // -10


const isEven = function (number) {
	if (number === 0) {
		return true;
	} else if (number === 1) {
		return false;
	} else {
		return isEven(number - 2);
	}
}


console.log(isEven(50)); // → true
console.log(isEven(75)); // → false
console.log(isEven(-1)); // → ?? - erro proposital consumirá todo o espaço em memória da pilha de chamadas e abortar.


function countBs(string) {
	return countChar(string, 'B');
}

function countChar(string, caracter) {
	let caracterNumbersFound = 0;

	for (let i = 0; i < string.length; i++) {
		if (string.charAt(i) === caracter) {
			caracterNumbersFound++;
		}
	}

	return caracterNumbersFound;
}

console.log(countBs('BBC'));// → 2
console.log(countChar('kakkerlak', 'k')); // → 4
